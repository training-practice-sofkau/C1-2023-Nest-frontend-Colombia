import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-bank-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  resetPass!: string[];
  signUp!: string[];

  constructor() {
    this.resetPass = ['../reset-pass'];
    this.signUp = ['../signup'];
  }

  ngOnInit(): void {
    this.random_bg_color();
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
