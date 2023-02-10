import { IDocumentType } from "../document-type/document-type.interface";

export interface IGetUser {
    id: string,
    state: boolean,
    documentType: IDocumentType,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string
}