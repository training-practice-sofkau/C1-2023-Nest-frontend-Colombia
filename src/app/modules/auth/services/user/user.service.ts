import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUsers } from '../../interfaces/users.interface';
import { NewUserModel } from '../../models/new-user-models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: NewUserModel) {
    return this.httpClient.post('http://localhost:3000/user', user.getData());
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>(
      'http://fe80::9d37:24d5:bbf1:6b9b%3/64:3000/'
    );
  }
}
