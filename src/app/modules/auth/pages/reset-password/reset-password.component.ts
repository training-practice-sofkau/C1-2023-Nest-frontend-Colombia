import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //standalone: true,
  selector: 'sofka-bank-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  routePrincipal: string[];
  routeEstudios: string[];

  constructor(private router: Router) {
    this.routePrincipal = ['../'];
    this.routeEstudios = ['../estudios'];
    this.router
  }

  ngOnInit(): void {
  }

}
