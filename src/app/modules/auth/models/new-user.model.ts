import { DocumentTypeEnum } from "src/app/shared/enums/document-type.enum";

export class NewUserModel {
  documentTypeId: DocumentTypeEnum;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;

  constructor(
    documenType: DocumentTypeEnum,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string,
    avatarUrl?: string,
  ) {
    this.documentTypeId = documenType;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    if (avatarUrl) this.avatarUrl = avatarUrl;
  }

  getData(): {
    documentTypeId: DocumentTypeEnum,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string,
    avatarUrl?: string,
  } {
    return this
  }
}