import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGetUser } from 'src/app/modules/dashoard/models/get-User.model';
import { UpdateUser } from '../../interfaces/update-User.interface';

import { IUsers } from '../../interfaces/users.interface';
import { NewUserModel } from '../../models/new-user-models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userId = new BehaviorSubject<string>('');
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: NewUserModel): Observable<IUsers> {
    return this.httpClient.post<IUsers>(
      'http://localhost:3000/security/newUser',
      user
    );
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('http://localhost:3000/');
  }
  getUserById(id: string): Observable<IGetUser> {
    return this.httpClient.get<IGetUser>('http://localhost:3000/user/' + id);
  }
  getUserByEmail(email: string): Observable<IGetUser> {
    return this.httpClient.get<IGetUser>(
      'http://localhost:3000/user/google/' + email
    );
  }
  setUser(userId: string) {
    this.userId.next(userId);
  }

  updateUser(id: string, user: UpdateUser): Observable<UpdateUser> {
    return this.httpClient.put<UpdateUser>(
      'http://localhost:3000/user/' + id,
      user
    );
  }
}
