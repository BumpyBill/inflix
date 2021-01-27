import MessageEmbed from "./MessageEmbed.ts";

export default interface MessageData {
  tts?: boolean;
  embed?: MessageEmbed;
}
