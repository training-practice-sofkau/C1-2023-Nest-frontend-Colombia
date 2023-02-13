import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResLogin } from 'src/app/modules/main/models/res-login.model';
import { IGetUser } from '../../../main/interfaces/user-get/user-get.interface';
import { LoginModel } from '../../../main/models/login.model';
import { NewUserModel } from '../../../main/models/new-user.model';
import { IUpdateUser } from '../../models/update-user.model';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceUserService {
  constructor(private readonly httpClient: HttpClient) { }

  createNewUser(newUser: NewUserModel) {
    return this.httpClient.post(
      'http://localhost:3000/security/register',
      newUser.getData()
    );
  }

  getAllUser() {
    return this.httpClient.get('http://localhost:3000/user');
  }

  login(loginuser: LoginModel): Observable<IResLogin> {
    return this.httpClient.post<IResLogin>(
      'http://localhost:3000/security/login',
      loginuser.getData()
    );
  }

  getUserById(id: string): Observable<IGetUser> {
    return this.httpClient.get<IGetUser>('http://localhost:3000/user/' + id);
  }

  updateUser(id: string, user: IUpdateUser): Observable<IUpdateUser> {
    console.log(user.getData())
    return this.httpClient.put<IUpdateUser>("http://localhost:3000/user/" + id, user.getData())
  }
}
