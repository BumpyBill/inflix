import Client from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";
import ClientUser from "../client/ClientUser.ts";
export default function (client: Client, payload: Payload) {
  const { user: d } = payload.d;
  client.user = new ClientUser(
    d.username,
    d.discriminator,
    d.verified,
    d.id,
    d.flags,
    d.email,
    d.bot,
    d.avatar
  );
  client.emit("ready");
}
