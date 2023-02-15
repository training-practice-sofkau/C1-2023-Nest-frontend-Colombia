import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/modules/auth';

@Component({
  selector: 'sofka-bank-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  signIn!: string[];
  signUp!: string[];
  constructor(private router: Router) {
    this.signIn = ['../shared/signin'];
    this.signUp = ['../shared/signup'];
  }

  ngOnInit(): void {
    const user = <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''));
    if(user) this.router.navigate(['dashboard']);
  }

}
