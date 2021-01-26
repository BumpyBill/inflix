import MessageReference from "../message/MessageReference.ts";
import MessageData from "../message/MessageData.ts";
import MessageEmbed from "./MessageEmbed.ts";

export default class Message {
  type: number = 0;
  tts: boolean = false;
  timestamp!: string;
  referenced_message?: Message;
  pinned: boolean = false;
  nonce?: string | number;
  message_reference!: MessageReference;
  mentions: User[] = [];
  mention_roles: Role[] = [];
  mention_everyone: boolean = false;
  member!: GuildMember;
  flags?: number = 0;
  embeds: MessageEmbed[] = [];
  edited_timestamp?: string;
  content!: string;
  author!: User;
  attachments: MessageAttachment[] = [];

  constructor(content: string, data: MessageData) {
    console.log(this);
  }
}
