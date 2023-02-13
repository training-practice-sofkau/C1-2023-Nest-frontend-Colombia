import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newUserModel } from '../../models/new-user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private readonly httpClient: HttpClient) {}

    createUser(user: newUserModel) {
      return this.httpClient.post('localhost:3000', user.getData());

    }
  }


