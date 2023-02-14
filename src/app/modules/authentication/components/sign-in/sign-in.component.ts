import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
//import { fc } from '../../../user/user.module'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  routeLogIn: string[];
  routeProfile: string[];
  user!: FormGroup
  submitted = false;

  constructor(private router: Router, private readonly user$: UserService) {
    this.routeLogIn = ['../log_in'];
    this.routeProfile = ['/profile']
    this.user = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      
      password: new FormControl('', [
        Validators.required,
      ]),
      
     });
  }

  onSubmit() {
    this.submitted = true;

   if (this.user.invalid) {
        return;
    }
      const user = {
        password: this.user.get('password')?.value,
        email: this.user.get('email')?.value,
      }
   
  console.log('user ', this.user.value)
  this.user$.signIn(user).subscribe({
    next: data  => {
      console.log('re ', data)
      this.router.navigate(['../../../', 'profile', 'p']);
    },
    error: err => console.error(err),
    complete: () => console.info('complete')
  }
  );
}
  goTo(): void {
    console.log('enviar')
    // this.router.navigate(['../experiencia-laboral'], {
    //   relativeTo: this.route,
    // });
    //this.router.navigate(['/profile/p']);
    
  //  this.router.navigate(['/profile']);
   // this.router.navigate(['./', 'profile', 'profile']);
  // this.router.navigate(['../../../', 'profile', 'p']);
   //this.router.navigate(['/log_in']);

  }

}
