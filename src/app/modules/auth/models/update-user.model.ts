export class UpdateUserModel {
  documentTypeId?: string;
  document?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  avatarUrl?: string;

  constructor(
    documenTypeId: string,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string,
    avatarUrl?: string,
  ) {
    this.documentTypeId = documenTypeId;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    if (avatarUrl) this.avatarUrl = avatarUrl;
  }
}