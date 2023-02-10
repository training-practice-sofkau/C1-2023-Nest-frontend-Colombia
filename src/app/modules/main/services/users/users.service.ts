import { NewUserModel } from './../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  createUser(user : NewUserModel) {
    return this.httpClient.post('localhost:3000/user', user.getData());
  }

  // {
    // "documentTypeId":"d8d0be69-27ae-4898-8fcd-37669ff45a13",
    // "document": "1243546",
    // "fullName": "pepe",
    // "email": "loco16@hotmail.com",
    // "phone": "3256874698",
    // "password": "An247963456"
  // }
}
