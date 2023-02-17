import { DocumentTypeEnum } from "src/app/shared/enums/document-type.enum";

export class UpdateCustomerModel {
  documentType?: DocumentTypeEnum;
  document?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  avatarUrl?: string;
  token?: string;

  constructor(
    documenType?: DocumentTypeEnum,
    document?: string,
    fullName?: string,
    email?: string,
    phone?: string,
    password?: string,
    token?: string,
    id?: string,
    avatarUrl?: string,
  ) {
    if (documenType) this.documentType = documenType;
    if (document) this.document = document;
    if (fullName) this.fullName = fullName;
    if (email) this.email = email;
    if (phone) this.phone = phone;
    if (password) this.password = password;
    if (avatarUrl) this.avatarUrl = avatarUrl;
    if (token) this.token = token;
  }
}