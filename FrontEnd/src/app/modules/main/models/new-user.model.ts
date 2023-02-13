export class newUserModel {

  documentTypeId: string;
  fullName: string;
  document: string;
  email: string;
  phone: string;
  password: string;

  constructor ( documentTypeId: string,document: string, fullName: string , email: string , phone: string , password: string ){
    this.documentTypeId = documentTypeId;
    this.fullName = fullName;
    this.document = document;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  getData(): {
    documentTypeId: string;
    fullName: string;
    document: string;
    email: string;
    phone: string;
    password: string} {
  return({ 
    documentTypeId: this.documentTypeId,
    fullName: this.fullName,
    document: this.document,
    email: this.email,
    phone: this.phone,
    password: this.password,
    }) 
  }
}