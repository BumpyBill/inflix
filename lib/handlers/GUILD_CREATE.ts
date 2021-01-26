import Client from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";

export default function (client: Client, payload: Payload) {
  client.emit("guild_create", payload.d);
}
