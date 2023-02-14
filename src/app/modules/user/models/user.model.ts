export class UserModel {
  document: string;
  fullName: string;
  email: string;
  phone: string;
  constructor(document: string, fullName: string, email: string, phone: string) {
    this.document = document
    this.fullName = fullName
    this.email = email
    this.phone = phone
  }

  getData() {
    return {
      document: this.document,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
    };
  }
}
