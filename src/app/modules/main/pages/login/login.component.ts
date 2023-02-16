/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sofka-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public readonly authService: AuthService) {}


  auth(): void {
    this.authService.GoogleAuth();
  }


  // logout(): void {
  //   this.authService.SignOut();
  // }

  // login(): void {
  //   this.authService.SignIn(this.userName, this.userPassword);
  // }
}
