import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';
import { UserInterface } from '../../interfaces';

@Component({
  selector: 'sofka-bank-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  resetPass!: string[];
  signUp!: string[];
  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(private readonly auth$: AuthService, private readonly formBuilder: FormBuilder,) {
    this.resetPass = ['../reset-pass'];
    this.signUp = ['../signup'];
  }

  ngOnInit(): void {
    this.random_bg_color();
  }

  onSubmit() {
    console.log(this.checkoutForm.value)
    const user = <UserModel>this.checkoutForm.value;
    this.auth$.signIn(user).subscribe({
      next: (data) => this.handlerSuccess(data),
      error: (err) => this.handlerError(err),
      complete: () => console.log('complente')
    })
  }

  handlerSuccess(data: UserInterface): void {
    //this.auth$.setAuthorizationToken(data.data?.email)
    alert(data)
  }

  handlerError(err: any): void {
    console.log(err)
    alert(err?.message)
  }

  random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
  }


}
