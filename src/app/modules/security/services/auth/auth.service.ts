import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { AccountService } from '../../../account/services/account/account.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessionGoogle = new BehaviorSubject<boolean>(false);
  setGoogleOut(google: boolean) {
    this.sessionGoogle.next(google);
  }
  getGoogleObservOut(): Observable<boolean> {
    return this.sessionGoogle.asObservable();
  }
  getGoogleSubjectOut() {
    return this.sessionGoogle.getValue();
  }
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public afs: AngularFirestore,
    private readonly acountService: AccountService
  ) {}

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      // this.router.navigate(['account']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        // this.router.navigate(['account']);
        sessionStorage.setItem(
          'googleUserEmail',
          JSON.stringify(result.additionalUserInfo?.profile)
        );
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
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
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['sign-in']);
    });
  }

  get isLoggedIn(): boolean {
    if (localStorage.getItem('id')) return true;
    return false;
  }
}
