import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewTransfers } from 'src/app/modules/transfer/interfaces/transfers.model';
import { INewUser } from '../../interfaces/new-user.interface';
import { IUsers } from '../../interfaces/users.interface';
import { NewUserModel } from '../../models/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }

  /*createUser(user: NewUserModel): Observable<INewUser> {
    console.log('USER ', user)
    return this.httpClient.post<INewUser>(
      '/api/security/register',
      user
    );
  }*/

  createUser(user: NewUserModel): Observable<string> {
    console.log('USER ', user)
    const token =  this.httpClient.post<string>(
      '/api/security/register',
      user
    );
    return token
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('/api/customer');
  }
}
