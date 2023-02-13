import { newUserModel } from './../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}
  createUser(user: newUserModel) {
    return this.httpClient.post(
      'http://localhost:3000/customers/',
      user.getData()
    );
  }
}
