import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  }

}
