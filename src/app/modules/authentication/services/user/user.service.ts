import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewTransfers } from 'src/app/modules/transfer/interfaces/transfers.model';
import { getUserModel } from 'src/app/modules/user/models/get-user-model';
import { INewUser } from '../../interfaces/new-user.interface';
import { IUsers } from '../../interfaces/users.interface';
import { NewUserModel } from '../../models/new-user.model';
import { TokenModel } from '../../models/sig-in-token.model';
import { SignInModel } from '../../models/sign-in.model';

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

  createUser(user: NewUserModel): Observable<TokenModel> {
    console.log('USER ', user)
    const res =  this.httpClient.post<TokenModel>(
      '/api/security/register',
      user
    );
    return res
  }

  updateUser(user: NewUserModel): Observable<TokenModel>{
    return this.httpClient.put<TokenModel>(
      `/api/customer/${user.id}`,
      user
    )
  }

  signIn(user: SignInModel): Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(
      '/api/security/signIn',
      user
    )
  }

  getCustomer(id: string): Observable<getUserModel>{
    return this.httpClient.get<getUserModel>(
      `/api/customer/${id}`
    )
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('/api/customer');
  }
}
