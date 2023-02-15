// Libraries
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

// Models
import { NewAuthModel } from '../models/new-user.model';
import { AuthModel } from '../models/auth.model';

// Variables and interfaces
import { environment } from 'src/environments/environment';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly uri = environment.baseUrl + 'security/';
  private currentUser!: UserInterface;
  private headers!: HttpHeaders;

  constructor(private readonly http: HttpClient) { }

  signUp(user: NewAuthModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.uri + 'signup', user)
      .pipe(
        tap(
          valid => {
            if (valid) this.setUser(valid);
          }))
  }

  signIn(user: AuthModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.uri + 'signin', user)
      .pipe(
        tap(
          valid => {
            if (valid) this.setUser(valid);
          }))
  }

  private setUser(user: UserInterface): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    if(user){
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.currentUser.data.token}`,
      })
    }
  }

  private getUser(): UserInterface {
    return <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''));
  }

  signOut(): Observable<string> {
    localStorage.removeItem('currentUser');
    return this.http.post<string>(this.uri + 'signout', '', { headers: this.headers })
  }

  refreshToken(): Observable<boolean> {
    this.setUser(this.getUser());
    return this.http.get<UserInterface>(this.uri + 'refresh', { headers: this.headers })
      .pipe(
        map(resp => {
          return resp.success
        }), catchError(() => of(false)))
  }
}
