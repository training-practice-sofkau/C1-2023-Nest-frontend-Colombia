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
import { DeleteItemComponent } from '../../../todo-list/pages/delete-item/delete-item.component';

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
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', 'null');
    //     JSON.parse(localStorage.getItem('user')!);
    //   }
    // });
  }



// Sign in with email/password
// SignIn(email: string, password: string) {
//   return this.afAuth
//     .signInWithEmailAndPassword(email, password)
//     .then((result) => {
//       this.SetUserData(result.user);
//       this.afAuth.authState.subscribe((user) => {
//         if (user) {
//           this.router.navigate(['dashboard']);
//         }
//       });
//     })
//     .catch((error) => {
//       window.alert(error.message);
//     });
// }

/* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // SetUserData(user: any) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified,
  //     isAnonymous: false,
  //     metadata: {
  //       creationTime: '',
  //       lastSignInTime: ''
  //     },
  //     providerData: [],
  //     refreshToken: '',
  //     tenantId: null,
  //     delete: function (): Promise<void> {
  //       throw new Error('Function not implemented.');
  //     },
  //     getIdToken: function (forceRefresh?: boolean | undefined): Promise<string> {
  //       throw new Error('Function not implemented.');
  //     },
  //     getIdTokenResult: function (forceRefresh?: boolean | undefined): Promise<auth.IdTokenResult> {
  //       throw new Error('Function not implemented.');
  //     },
  //     reload: function (): Promise<void> {
  //       throw new Error('Function not implemented.');
  //     },
  //     toJSON: function (): object {
  //       throw new Error('Function not implemented.');
  //     },
  //     phoneNumber: null,
  //     providerId: ''
  //   };
  //   return userRef.set(userData, {
  //     merge: true,
  //   });
  // }

// Sign up with email/password
// SignUp(email: string, password: string) {
//   return this.afAuth
//     .createUserWithEmailAndPassword(email, password)
//     .then((result) => {
//       /* Call the SendVerificaitonMail() function when new user sign
//       up and returns promise */
//       this.SendVerificationMail();
//       this.SetUserData(result.user);
//     })
//     .catch((error) => {
//       window.alert(error.message);
//     });
// }

// Send email verfificaiton when new user sign up
// SendVerificationMail() {
//   return this.afAuth.currentUser
//     .then((u: any) => u.sendEmailVerification())
//     .then(() => {
//       this.router.navigate(['verify-email-address']);
//     });
// }

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
      this.router.navigate(['login']);
    });
  }
}
