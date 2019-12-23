export class User {
  constructor(
    public id: string,
    public email: string,
    private _token: string,
    private tokenExpirationDate: Date
  ) {}

  get token() {
    if(!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null; //gak ada token atw udah kadaluarsa
    }
    return this._token;
  }
}
