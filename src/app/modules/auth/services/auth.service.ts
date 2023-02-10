import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUserModel } from '../models/new-user.model';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly uri = environment.baseUrl + 'security/'

  constructor(private http: HttpClient) { }

  signUp(user: NewUserModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.uri + 'signup', user)
  }

  signIn(user: UserModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.uri + 'signin', user)
  }

  //signIn()
}
