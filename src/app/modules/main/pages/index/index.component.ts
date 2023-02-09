import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-bank-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  signIn!: string[];
  signUp!: string[];
  constructor() {
    this.signIn = ['../shared/signin'];
    this.signUp = ['../shared/signup'];
  }

  ngOnInit(): void {
  }

}
