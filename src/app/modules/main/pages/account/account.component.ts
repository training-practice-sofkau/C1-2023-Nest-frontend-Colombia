import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  json = {
    "id": "1d7b369a-e5fa-4c13-bc52-5d9ac820c1c5",
    "balance": 0,
    "state": true,
    "customer": {
      "id": "243d1cd6-01f5-4594-bef2-a41aa3fd417e",
      "state": true
    },
    "accountType": {
      "id": "4cbe32bf-581a-4fb4-bbff-24220f7195d1",
      "state": true
    }
  }
  customerName: string;
  balance: number;
  state: boolean;
  customerState: boolean;
  accountTypeState: boolean;
  idAccountType: string
  idAccount: string
  constructor() {
    this.accountTypeState = false
    this.balance = 0
    this.customerName = "";
    this.customerState = false
    this.state = false;
    this.idAccount = "";
    this.idAccountType = ""
  }

  ngOnInit(): void {
    this.accountTypeState = this.json.accountType.state;
    this.balance = this.json.balance;
    this.customerName = "Daniel Basto";
    this.customerState = this.json.customer.state
    this.state = this.json.state
    this.idAccount = this.json.id
    this.idAccountType = this.json.accountType.id
  }

}
