import { DocumentTypeEnum } from "src/app/shared/enums/document-type.enum";

export class NewUserModel {
  id?:string;
  documentTypeId: DocumentTypeEnum;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  token?: string;

  constructor(
    documenType: DocumentTypeEnum,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string,
    token?: string,
    id?: string,
    avatarUrl?: string,
  ) {
    this.documentTypeId = documenType;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    if (avatarUrl) this.avatarUrl = avatarUrl;
    if (id) this.id = id;
    if (token) this.token = token;
  }
}