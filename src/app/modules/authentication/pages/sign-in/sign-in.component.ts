import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  routeLogIn: string[];
  router: any;

  constructor() {
    this.routeLogIn = ['../log_in'];
  }

  goTo(): void {
    // this.router.navigate(['../experiencia-laboral'], {
    //   relativeTo: this.route,
    // });
    this.router.navigate(['./', 'authentication', 'log_in']);
  }

}
