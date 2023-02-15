import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../../interfaces';

@Component({
  //standalone: true,
  selector: 'sofka-bank-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  signIn!: string[];
  signUp!: string[];

  constructor(private router: Router) {
    this.signIn = ['../signin'];
    this.signUp = ['../signup'];
  }

  ngOnInit(): void {
    this.random_bg_color();
    const user = <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''));
    if(user) this.router.navigate(['dashboard']);
  }

  private random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = bgColor;
  }

}
