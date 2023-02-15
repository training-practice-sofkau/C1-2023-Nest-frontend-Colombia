import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { createUserWithEmailAndPassword, Auth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  GoogleAuth() {
    //console.log('entra en g')
   return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      console.log('entra')
      this.router.navigate(['profile/p']);
    }, err => {
      console.log('err ', err)
    });
  }

  registerWithEmailandPassword({email, password}: any){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  loginGoogle() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  state(){
    let u
    this.afAuth.authState.subscribe((user) => {
      console.log('state', user)
      u =  user;
    });
    return u
    //console.log('thi ', this.user)
    //return this.user
    //console.log('this ', this.user)
  }

  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        //this.router.navigate(['profile/p']);
        this.router.navigate(['../../../', 'profile', 'p']);
        console.log('result', result);
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid ?? '');
        result.user
          ?.getIdToken()
          .then(token => localStorage.setItem('token', token));
      })
      .catch(error => {
        window.alert(error);
      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      localStorage.removeItem('token');
      this.router.navigate(['']);
    });
  }
}
