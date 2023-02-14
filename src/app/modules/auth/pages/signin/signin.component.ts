import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthModel } from '../../models/auth.model';
import { UserInterface } from '../../interfaces';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sofka-bank-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  resetPass!: string[];
  signUp!: string[];
  unauthorized!: boolean;
  checkoutForm!: FormGroup;

  constructor(
    private readonly auth$: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    this.resetPass = ['../reset-pass'];
    this.signUp = ['../signup'];
    this.checkoutForm= this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(new RegExp(environment.regexEmail))
      ],[]],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit(): void {
    this.random_bg_color();
    const user = <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''))
    if(user) this.router.navigate(['dashboard']);
  }

  onSubmit() {
    const user = <AuthModel>this.checkoutForm.value;
    this.auth$.signIn(user).subscribe({ 
      next: (data) => this.handlerSuccess(data),
      error: (err) => this.handlerError(err),
      complete: () => console.log('complente')
    })
  }

  handlerSuccess(data: UserInterface): void {
    localStorage.setItem('currentUser', JSON.stringify(data));
    this.router.navigate(['dashboard']);
  }

  handlerError(err: any): void {
    this.unauthorized = true;
  }

  handlerValidators(param: 'email' | 'password'): string {
    return this.checkoutForm.controls[param].errors && this.checkoutForm.controls[param].touched ? 'is-invalid' : ''
  }

  handlerMessage(param: 'email' | 'password'): string {
    const messages = {
      pattern: `Please provide a valid ${param}`,
      required: `Enter ${param} here`,
    }
    let message = '';
    const errorValue = (Object.values(this.checkoutForm.controls[param].errors ?? {})[0])
    const errorKey = (Object.keys(this.checkoutForm.controls[param].errors ?? {}))[0]
    switch (errorKey) {
      case 'required': message = messages.required
        break
      case 'pattern': message = messages.pattern//+param==='email'?'. The password must be at least 8 characters and contain at least 1 lowercase, 1 uppercase, and 1 number.':''
        break
    }
    return message;
  }

  private random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = bgColor;
  }
}
