// Libraries
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';

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
  private headers!: HttpHeaders;

  constructor(private readonly http: HttpClient,
    private readonly router: Router, private readonly afAuth: AngularFireAuth) { }

  signUp(user: NewAuthModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.uri + 'signup', user)
      .pipe(
        tap(
          valid => {
            if (valid) this.setToken(valid.data.token);
            this.router.navigate(['dashboard']);
          }))
  }

  signIn(user: AuthModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.uri + 'signin', user)
      .pipe(
        tap(
          valid => {
            if (valid) this.setToken(valid.data.token);
            this.router.navigate(['dashboard']);
          }))
  }

  signOut(): Observable<string> {
    this.signOutGoogle();
    localStorage.removeItem('access_token');
    return this.http.post<string>(this.uri + 'signout', '', { headers: this.headers })
  }

  signInGoogle(): Observable<UserInterface> {
    const googleToken = localStorage.getItem('googleToken');
    return this.http.post<UserInterface>(this.uri + 'signin/google', {token: googleToken})
  }

  refreshToken(): Observable<boolean> {
    return this.http.get<UserInterface>(this.uri + 'refresh')
      .pipe(
        map(resp => {
          localStorage.setItem('access_token', resp.data.token)
          return resp.success
        }), catchError(() => of(false)))
  }

  private setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  async signInGoogleAuth(): Promise<void> {
    return this.authLogin(new auth.GoogleAuthProvider())
  }

  async signUpGoogleAuth(): Promise<void> {
    return await this.authLogin(new auth.GoogleAuthProvider());
  }

  private async authLogin(provider: any): Promise<void> {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        result.user
          ?.getIdToken()
          .then(token => {
            localStorage.setItem('googleToken', token)
            this.signInGoogle().subscribe({
              next: (data) => {
                this.setToken(data.data.token);
                this.router.navigate(['dashboard']);
              },
              error: (err) => console.log(err),
              complete: () => console.log('complete'),
            })
          });
      })
      .catch(error => {
        window.alert(error);
      });
  }

  async signOutGoogle(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('googleToken');
      this.router.navigate(['login']);
    });
  }
}
