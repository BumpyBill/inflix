import { EmbedType } from "../enums/Embed.ts";
import EmbedField from "../interfaces/MessageEmbed/EmbedField.ts";
import EmbedFooter from "../interfaces/MessageEmbed/EmbedFooter.ts";
import EmbedImage from "../interfaces/MessageEmbed/EmbedImage.ts";
import EmbedProvider from "../interfaces/MessageEmbed/EmbedProvider.ts";
import EmbedThumbnail from "../interfaces/MessageEmbed/EmbedThumbnail.ts";
import EmbedVideo from "../interfaces/MessageEmbed/EmbedVideo.ts";

export default class MessageEmbed {
  title?: string;
  type?: EmbedType;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  fields?: EmbedField[] = [];
}
