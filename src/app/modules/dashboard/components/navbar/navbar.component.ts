import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-bank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home!: string[];
  deposits!: string[];
  newDeposit!: string[];
  transfers!: string[];
  newTransfer!: string[];
  editCustomer!: string[]

  constructor() {
    this.home = ['dashboard'];
    this.deposits = ['./deposits'];
    this.newDeposit = ['./deposits/add'];
    this.transfers = ['./transfers'];
    this.newTransfer = ['./transfers/add'];
    this.editCustomer = ['./edit'];
  }

  ngOnInit(): void {
  }

}
