import { AccountInterface } from './../../interfaces/account.interface';
import { IDocumenType } from './../../interfaces/documentType.interface';
import { IUsers } from './../../interfaces/users.interface';
import { IUser } from './../../interfaces/user.interface';
import { INewUser } from './../../interfaces/new-user.interface';
import { Observable } from 'rxjs';
import { NewUserModel } from './../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  createUser(user : NewUserModel): Observable<INewUser> {
    return this.httpClient.post<INewUser>('http://localhost:3000/security/sign-up', user.getData());
  }

  getAccountById(id: string): Observable<AccountInterface[]>{
    return this.httpClient.get<AccountInterface[]>('http://localhost:3000/account/getAccount/' + id)
  }

}
