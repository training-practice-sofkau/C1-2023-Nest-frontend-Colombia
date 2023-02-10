export class NewUserModel {
    documentTypeId: string;
    document: string
    fullName: string
    email: string
    phone: string
    password: string

    constructor(
        documentTypeId: string,
        document: string,
        fullName: string,
        email: string,
        phone: string,
        password: string
    ) {

        this.documentTypeId = documentTypeId;
        this.document = document;
        this.email = email;
        this.fullName = fullName;
        this.password = password;
        this.phone = phone
    }

    getData() {
        return {
            documentTypeId: this.documentTypeId,
            document: this.document,
            email: this.email,
            fullName: this.fullName,
            password: this.password,
            phone: this.phone
        }
    }
}