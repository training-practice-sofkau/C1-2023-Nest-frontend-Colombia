import { Component } from '@angular/core';
import { AuthService } from '../../security/userAuth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'sofka-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  routeSingUp: string[];
  frmLogin: FormGroup;
  constructor(private readonly auth$: AuthService) {
    this.routeSingUp = ['sign-up'];
    this.frmLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern(environment.regexPassword),
      ]),
    });
  }

  auth(): void {
    this.auth$.GoogleAuth();
  }

  signIn(user: string, password: string): void {
    this.auth$.SignIn(user, password);
  }

  signUp(user: string, password: string): void {
    this.auth$.SignUp(user, password);
  }
}
