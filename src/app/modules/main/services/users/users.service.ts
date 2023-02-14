import { newUserModel } from './../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewUSer } from '../../interfaces/newUser.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: newUserModel): Observable<INewUSer> {
    return this.httpClient.post<INewUSer>(
      'http://localhost:3000/customers/',
      user.getData()
    );
  }
  infoUser() {
    return this.httpClient.get(
      'localhost:3000/customers/45c3388c-f274-4ecc-a082-ff312a104199'
      // user.getData()
    );
  }
}
