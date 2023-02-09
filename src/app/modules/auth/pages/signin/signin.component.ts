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
  }

}
