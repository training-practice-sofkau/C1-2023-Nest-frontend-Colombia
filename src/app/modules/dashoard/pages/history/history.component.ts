import { Component, OnInit } from '@angular/core';
import { depositInterface } from '../../interfaces/deposit.Interface';
import { HistoryModel } from '../../models/history.model';
import { CreateAccountService } from '../../services/CreateAccount/create-account.service';
import { HistoryService } from '../../services/history/history.service';

@Component({
  selector: 'sofka-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyDeposit: depositInterface[];
  history: object[];
  idUser: string;
  constructor(
    private readonly historyService: HistoryService,
    private readonly createAccountService: CreateAccountService
  ) {
    this.history = new Array<object>();
    this.historyDeposit = new Array<depositInterface>();
    this.idUser = '';
  }
  ngOnInit(): void {
    this.idUser = localStorage.getItem('id') ?? '';
    this.historyService.getDepositAll(this.idUser).subscribe({
      next: data => {
        console.log(data);
        this.historyDeposit = data;
      },
      error: err => {
        console.log(err.error.message);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
