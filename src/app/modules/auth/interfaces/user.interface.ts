export interface UserInterface {
  success: boolean,
  token: string,
  user: {
    id: string;
    documentTypeId: string;
    document: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    avatarUrl: string;
  }
}