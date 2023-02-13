import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetUser } from 'src/app/modules/dashoard/models/get-User.model';

import { IUsers } from '../../interfaces/users.interface';
import { NewUserModel } from '../../models/new-user-models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: NewUserModel): Observable<IUsers> {
    return this.httpClient.post<IUsers>(
      'http://localhost:3000/security/newUser',
      user.getData()
    );
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('http://localhost:3000/');
  }
  getUserById(id: string): Observable<IGetUser> {
    return this.httpClient.get<IGetUser>('http://localhost:3000/user/' + id);
  }
}
