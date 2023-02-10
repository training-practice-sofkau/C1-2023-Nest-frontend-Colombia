import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  routeSignIn: string[];
  routeLogIn: string[];

  constructor() {
    this.routeSignIn = ['sign_in'];
    this.routeLogIn = ['log_in'];
  }

}
