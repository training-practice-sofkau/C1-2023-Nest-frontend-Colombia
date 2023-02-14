import { DocumentTypeEnum } from 'src/app/shared/enums/document-type.enum';
export interface UserInterface {
  success: boolean
  data: {
    id: string;
    documentTypeId: string;
    document: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    avatarUrl?: string;
    token: string;
  }
}