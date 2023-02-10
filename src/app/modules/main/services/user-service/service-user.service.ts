import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetUser } from '../../interfaces/user-get/user-get.interface';
import { LoginModel } from '../../models/login.model';
import { NewUserModel } from '../../models/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private readonly httpClient: HttpClient) { }

  createNewUser(newUser: NewUserModel) {
    return this.httpClient.post("http://localhost:3000/security/register", newUser.getData())
  }

  getAllUser(){
    return this.httpClient.get("http://localhost:3000/user");
  }

  login(loginuser: LoginModel){
    return this.httpClient.post("http://localhost:3000/security/login",loginuser.getData())
  }
}
