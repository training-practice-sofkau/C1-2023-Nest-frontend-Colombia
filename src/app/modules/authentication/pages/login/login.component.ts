import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  routeMain: string[];
  routeSignIn: string[];

  constructor() {
    this.routeMain = ['../'];
    this.routeSignIn = ['../sign_in'];
  }

}
