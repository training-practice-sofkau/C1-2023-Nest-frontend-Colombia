import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-bank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home!: string[];
  accounts!: string[];
  newAccount!: string[];
  deposits!: string[];
  newDeposit!: string[];
  transfers!: string[];
  newTransfer!: string[];
  editCustomer!: string[]

  constructor() {
    this.home = ['dashboard'];
    this.accounts = ['./accounts'];
    this.newAccount = ['./accounts/add'];
    this.deposits = ['./deposits'];
    this.newDeposit = ['./deposits/add'];
    this.transfers = ['./transfers'];
    this.newTransfer = ['./transfers/add'];
    this.editCustomer = ['./edit'];
  }

  ngOnInit(): void {
  }

}
