import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/services';
import { UserInterface } from '../../../auth/interfaces';
import { BackgroundColorService } from '../../../../shared/services/background-color.service';

@Component({
  selector: 'sofka-bank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home!: string[];
  signout!: string[];
  accounts!: string[];
  deposits!: string[];
  transfers!: string[];
  transactions!: string[];
  customerDetail!: string[]
  currentUser!: UserInterface;

  constructor(
    private readonly auth$: AuthService,
    private readonly backgroundColor$: BackgroundColorService,
  ) {
    this.home = ['dashboard'];
    this.signout = ['../index'];
    this.accounts = ['./accounts'];
    this.deposits = ['./deposits'];
    this.transfers = ['./transfers'];
    this.transactions = ['./transactions']
    this.customerDetail = ['./'];
    this.currentUser = JSON.parse(localStorage.getItem('user') ?? JSON.stringify(''));
  }

  ngOnInit(): void {
    this.backgroundColor$.updateColor.subscribe({
      next: (color: boolean) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const bgColor = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background = bgColor;
      }
    })
  }

  signOut(): void {
    this.auth$.signOut().subscribe
  }
}
