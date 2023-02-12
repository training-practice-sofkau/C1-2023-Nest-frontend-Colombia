export class UserModel {
  document: string;
  fullName: string;
  email: string;
  phone: string;
  documentType: string;
  constructor() {
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.documentType = '';
    this.phone = '';
  }

  getData() {
    return {
      document: this.document,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      documentType: this.documentType,
    };
  }
}
