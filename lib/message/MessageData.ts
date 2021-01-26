import MessageEmbed from "../models/MessageEmbed.ts";

export default interface MessageData {
  tts: boolean;
  embed: MessageEmbed;
}
