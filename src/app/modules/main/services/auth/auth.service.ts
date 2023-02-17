/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { AuthProvider } from 'firebase/auth';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    private router: Router,
    private afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public localStorage: LocalStorageService
    )
  {

  }



// Sign in with email/password
SignIn(email: string, password: string) {
  return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('uid', result.user?.uid as string);
      localStorage.setItem('displayName', result.user?.displayName as string);
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.router.navigate(['todo-list']);
        }
      });
    })
    .catch((error) => {
      window.alert(error.message);
    });
}


// Sign up with email/password
SignUp(email: string, password: string) {
  return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      this.SendVerificationMail();
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('uid', result.user?.uid as string);
    })
    .catch((error) => {
      window.alert(error.message);
    });
}

// Send email verfificaiton when new user sign up
SendVerificationMail() {
  return this.afAuth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    });
}

  GoogleAuth() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['todo-list']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['todo-list']);
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid as string);
        localStorage.setItem('displayName', result.user?.displayName as string);

        //this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('uid');
      localStorage.removeItem('user');
      localStorage.removeItem('displayName');
      this.router.navigate(['login']);
    });
  }
}
