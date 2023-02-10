import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-bank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home!: string[];
  signout!: string[];
  accounts!: string[];
  newAccount!: string[];
  deleteAccount!: string[];
  deposits!: string[];
  newDeposit!: string[];
  transfers!: string[];
  newTransfer!: string[];
  editCustomer!: string[]
  customerDetail!: string[]

  constructor() {
    this.home = ['dashboard'];
    this.signout = ['../index'];
    this.accounts = ['./accounts'];
    this.newAccount = ['./accounts/add'];
    this.deleteAccount = ['./accounts/delete'];
    this.deposits = ['./deposits'];
    this.newDeposit = ['./deposits/add'];
    this.transfers = ['./transfers'];
    this.newTransfer = ['./transfers/add'];
    this.editCustomer = ['./edit'];
    this.customerDetail = ['./'];
  }

  ngOnInit(): void {
  }

}
