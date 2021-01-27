import MessageReference from "../message/MessageReference.ts";
import MessageData from "../message/MessageData.ts";
import MessageEmbed from "./MessageEmbed.ts";

export default class Message {
  content?: string | null;
  type: number = 0;
  tts: boolean = false;
  timestamp!: string;
  referenced_message?: Message;
  pinned: boolean = false;
  nonce?: string | number;
  reference!: MessageReference;
  // mentions: User[] = [];
  // mention_roles: Role[] = [];
  mention_everyone: boolean = false;
  // member!: GuildMember;
  flags?: number = 0;
  embed?: MessageEmbed;
  edited_timestamp?: string;
  // author!: User;
  // attachments: MessageAttachment[] = [];

  constructor(content: string | null | undefined, data?: MessageData) {
    this.tts = data?.tts ? data?.tts : false;
    this.embed = data?.embed;
    this.content = content;
  }
}
