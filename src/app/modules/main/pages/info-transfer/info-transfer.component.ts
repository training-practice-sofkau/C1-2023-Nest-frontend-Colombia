import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-transfer',
  templateUrl: './info-transfer.component.html',
  styleUrls: ['./info-transfer.component.scss']
})
export class InfoTransferComponent implements OnInit {
  json = {
    "id": "cbf04507-87f7-40ac-b830-a791e20c99f5",
    "amount": 50,
    "outcome": {
      "id": "1e3cbc82-75ba-412a-b1db-3dca8ca1c48c",
      "balance": 50,
      "state": true,
      "customer": {
        "id": "98f0a660-80dd-443e-80d0-73772e44958c",
        "state": true
      },
      "accountType": {
        "id": "8461271f-6b38-4cd3-9b30-d34f500f0383",
        "state": true
      }
    },
    "income": {
      "id": "93ea5c3b-2578-4ba4-ba9c-59b8fd09896e",
      "balance": 50,
      "state": true,
      "customer": {
        "id": "4564d0e2-51ff-41c3-ab2c-0ff85f898c80",
        "state": true
      },
      "accountType": {
        "id": "3ffd5616-8a04-4c24-9086-b5fef02e0b78",
        "state": true
      }
    },
    "reason": " Porque si"
  }
  idTransfer: string
  amountTransfer: number
  reason: string
  idOutcome: string
  balanceOutcome: number
  stateOutcome: boolean
  idIncome: string
  balanceIncome: number
  stateIncome: boolean
  constructor() {
    this.idTransfer = "";
    this.amountTransfer = 0;
    this.reason = ""
    this.idOutcome = ""
    this.balanceOutcome = 0
    this.stateOutcome = false
    this.idIncome = ""
    this.balanceIncome = 0
    this.stateIncome = false
  }

  ngOnInit(): void {
    this.idTransfer = this.json.id;
    this.amountTransfer = this.json.amount;
    this.reason = this.json.reason
    this.idOutcome = this.json.outcome.id
    this.balanceOutcome = this.json.outcome.balance
    this.stateOutcome = this.json.outcome.state
    this.idIncome = this.json.income.id
    this.balanceIncome = this.json.income.balance
    this.stateIncome = this.json.income.state
  }
}
