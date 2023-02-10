import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { fc } from '../../../user/user.module'

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
    this.routeProfile = ['/profile']
  }

  goTo(): void {
    console.log('enviar')
    // this.router.navigate(['../experiencia-laboral'], {
    //   relativeTo: this.route,
    // });
    //this.router.navigate(['/profile/p']);
    
  //  this.router.navigate(['/profile']);
   // this.router.navigate(['./', 'profile', 'profile']);
   this.router.navigate(['../../../', 'profile', 'p']);
   //this.router.navigate(['/log_in']);

  }

}
