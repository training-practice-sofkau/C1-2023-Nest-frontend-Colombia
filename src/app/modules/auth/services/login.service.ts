import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}
  //funcion para capturar datos
  sendLogin(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post('https://reqres.in/api/login', body);
  }
}
