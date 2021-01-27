import WebSocketManager from "../ws/WebSocketManager.ts";
import EventEmitter from "https://deno.land/std@0.51.0/node/events.ts";
import ClientUser from "./ClientUser.ts";

export default class Client extends EventEmitter {
  private ws: WebSocketManager = new WebSocketManager(this);
  private _user!: ClientUser;
  public token!: string;

  login(token: string) {
    this.ws.connect(token);

    this.token = token;
  }

  set user(user: ClientUser) {
    this._user = user;
  }

  get user() {
    return this._user;
  }
}
