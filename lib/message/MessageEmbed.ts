import { EmbedType } from "../enums/Embed.ts";
import EmbedField from "../message/MessageEmbed/EmbedField.ts";
import EmbedFooter from "../message/MessageEmbed/EmbedFooter.ts";
import EmbedImage from "../message/MessageEmbed/EmbedImage.ts";
import EmbedProvider from "../message/MessageEmbed/EmbedProvider.ts";
import EmbedThumbnail from "../message/MessageEmbed/EmbedThumbnail.ts";
import EmbedVideo from "../message/MessageEmbed/EmbedVideo.ts";

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
  fields: EmbedField[] = [];

  /** Set Embed Title */
  setTitle(text: string) {
    this.title = text;
    return this;
  }
  /** Set Embed Description */
  setDescription(text: string) {
    this.description = text;
    return this;
  }
  /** Set Embed URL */
  setUrl(text: string) {
    this.url = text;
    return this;
  }
  /** Set Embed Timestamp */
  setTimestamp(text: string) {
    this.timestamp = text;
    return this;
  }
  /**
   * Set Embed Color
   * @color decimal color
   */
  setColor(color: number) {
    this.color = color;
    return this;
  }

  /** Set Embed Footer */
  setFooter(footer: EmbedFooter) {
    this.footer = footer;
    return this;
  }

  /** Set Embed Image */
  setImage(image: EmbedImage) {
    this.image = image;
    return this;
  }

  /** Set Embed Thumbnail */
  setThumbnail(thumbnail: EmbedThumbnail) {
    this.thumbnail = thumbnail;
    return this;
  }

  /** Set Embed Video */
  setVideo(video: EmbedVideo) {
    this.video = video;
    return this;
  }

  /** Set Embed Provider */
  setProvider(provider: EmbedProvider) {
    this.provider = provider;
    return this;
  }

  /** Add Embed Field */
  addField(field: EmbedField) {
    this.fields.push(field);
    return this;
  }

  /** Add Embed Fields */
  addFields(fields: EmbedField[]) {
    this.fields.push(...fields);
    return this;
  }
}
