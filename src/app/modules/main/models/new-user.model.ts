import { getLocaleDateFormat } from "@angular/common";

export class NewUserModel {

  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  constructor(documentType: string, document: string,  fullName: string, email: string, phone: string, password: string ){
    this.documentTypeId = documentType;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  getData(): object {
  return {
    documentTypeId: this.documentTypeId,
    document: this.document,
    fullName: this.fullName,
    email: this.email,
    phone: this.phone,
    password: this.password,
  };
}

}
