import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUsers } from '../../interfaces/users.interface';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}
  //funcion para capturar datos
  sendLogin(email: string, password: string): Observable<IUsers> {
    const body = {
      email: email,
      password: password,
    };
    //https://reqres.in/api/login'
    return this.http.post<IUsers>('http://localhost:3000/security/login', body);
  }
}
