export class NewUserModel {
  name: string;
  email: string;
  phone?: string;

  constructor(name: string, email: string, phone?: string) {
    this.name = name;
    this.email = email;
    if (phone) this.phone = phone;
  }

  getData(): { name: string; email: string; phone?: string } {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone
    };
  }
}
