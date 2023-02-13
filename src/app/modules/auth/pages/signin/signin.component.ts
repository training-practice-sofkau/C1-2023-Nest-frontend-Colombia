import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';
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
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit(): void {
    this.random_bg_color();
  }

  onSubmit() {
    const user = <UserModel>this.checkoutForm.value;
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
    console.log(err.error.message)
    alert(err?.message)
  }

  private random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = bgColor;
  }
}
