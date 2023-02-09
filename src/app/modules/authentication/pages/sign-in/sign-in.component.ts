import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  routeLogIn: string[];
  routeProfile: string[];

  constructor(private router: Router) {
    this.routeLogIn = ['../log_in'];
    this.routeProfile = ['../profile']
  }

  goTo(): void {
    // this.router.navigate(['../experiencia-laboral'], {
    //   relativeTo: this.route,
    // });
    this.router.navigate(['profile']);
  }

}
