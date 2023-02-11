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

  createUser(user: NewUserModel): Observable<INewUser> {
    const r = this.httpClient.post<INewUser>(
      'localhost:3000/security/register',
      user
    );
    console.log('r ', r);
    return r
    // this.httpClient.get('http://localhost:3000/api/1231231231231231');
    // this.httpClient.delete('http://localhost:3000/api/1231231231231231');
    // this.httpClient.put('http://localhost:3000/api/', user.getData());
    // this.httpClient.patch('http://localhost:3000/api/', user.getData());
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('/api/customer');
  }
}
