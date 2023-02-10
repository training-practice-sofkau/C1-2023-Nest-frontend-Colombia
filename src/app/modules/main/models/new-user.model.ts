import { getLocaleDateFormat } from "@angular/common";

export class NewUserModel {

  documentType: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  constructor(documentType: string, document: string,  fullName: string, email: string, phone: string, password: string ){
    this.documentType = documentType;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  getData(): object {
  return {
    documentType: this.documentType,
    document: this.document,
    fullName: this.fullName,
    email: this.email,
    phone: this.phone,
    password: this.password,
  };
}

}
