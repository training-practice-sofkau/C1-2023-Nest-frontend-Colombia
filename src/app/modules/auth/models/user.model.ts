export class UserModel {
  id: string;
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone?: string;
  password: string;

  constructor(
    id: string,
    documentTypeId: string,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string
  ) {
    this.id = id;
    this.documentTypeId = documentTypeId;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
