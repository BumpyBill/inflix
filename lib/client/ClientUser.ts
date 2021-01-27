export default class ClientUser {
  constructor(
    public username: string,
    public discriminator: number,
    public verified: boolean,
    public id: string,
    public flags: number,
    public email: string,
    public bot: boolean,
    public avatar: string
  ) {}
}
