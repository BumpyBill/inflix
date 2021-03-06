import {
  connectWebSocket,
  WebSocket,
} from "https://deno.land/std@0.60.0/ws/mod.ts";

import { Constants, OPCODE } from "../constants/Constants.ts";
import { Heartbeat, Identify } from "../constants/Payloads.ts";
import Client from "../client/Client.ts";

export default class WebSocketManager {
  socket!: WebSocket;
  interval: number = 0;

  constructor(private client: Client) {}

  async connect(token: string) {
    try {
      this.socket = await connectWebSocket(Constants.GATEWAY);

      for await (const msg of this.socket) {
        var payload;
        if (typeof msg == "string") {
          payload = JSON.parse(msg.toString());
        } else {
          payload = msg;
        }

        const { t: event, op } = payload;

        switch (op) {
          case OPCODE.ZERO:
            if (this.client.debug) console.log("Event dispatched");
            break;
          case OPCODE.TEN:
            const { heartbeat_interval } = payload.d;
            this.interval = this.heartbeat(heartbeat_interval);
            await this.identify(token);
            if (this.client.debug) console.log("Sending heartbeat");
            break;
          case OPCODE.ELEVEN:
            if (this.client.debug) console.log("Heartbeat received");
            break;
        }

        if (event) {
          try {
            const { default: module } = await import(`../handlers/${event}.ts`);
            module(this.client, payload);

            if (this.client.debug) console.log(`Event triggered: ${event}`);
          } catch (e) {
            console.log(e);
            console.log("An unknown event has triggered.");
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  heartbeat(ms: number) {
    return setInterval(() => {
      this.socket?.send(JSON.stringify(Heartbeat));
    }, ms);
  }

  async identify(token: string) {
    Identify.d.token = token;

    return this.socket?.send(JSON.stringify(Identify));
  }
}
