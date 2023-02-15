export class UserModel {

  
  fullName: string;
  document: string;
  documentType: string;
  email: string;
  phone: string;
  password: string;

  constructor ( fullName: string, document: string, documentType: string ,  email: string ,phone: string, password: string ){
    
    this.fullName = fullName;
    this.document = document;
    this.documentType = documentType;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  getData(): {
    fullName: string;
    document: string;
    email: string;
    phone: string;
    password: string} {
  return({
    fullName: this.fullName,
    document: this.document,
    email: this.email,
    phone: this.phone,
    password: this.password,
    }) 
  }
}