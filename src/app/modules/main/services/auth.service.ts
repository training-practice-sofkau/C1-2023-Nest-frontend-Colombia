import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;

  constructor(private router:Router,
    private afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['items']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['items']);
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid ?? '');
      })
      .catch((error) => {
        window.alert(error);
      }
    );
  }

  public SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid ?? '');
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['items']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      }
    );
  }

  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid ?? '');
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['../']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
    }
}
