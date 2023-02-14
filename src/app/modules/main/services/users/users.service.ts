import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewUser } from '../../interfaces/new-user.interface';
import { IUsers } from '../../interfaces/users.interface';
import { NewUserModel } from '../../models/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: NewUserModel): Observable<INewUser> {
    return this.httpClient.post<INewUser>(
      'http://localhost:3000/api/',
      user.getData()
    );
    // this.httpClient.get('http://localhost:3000/api/1231231231231231');
    // this.httpClient.delete('http://localhost:3000/api/1231231231231231');
    // this.httpClient.put('http://localhost:3000/api/', user.getData());
    // this.httpClient.patch('http://localhost:3000/api/', user.getData());
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('http://localhost:3000/api/');
  }
}
