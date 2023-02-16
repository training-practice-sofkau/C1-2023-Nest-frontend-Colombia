import { Component, OnInit } from '@angular/core';
import { DepositInterface } from '../../interfaces/Deposit.deposit';
import { TransferInterface } from '../../interfaces/transfer.interface';
import { DepositModel } from '../../../main/models/deposit.model';
import { HistoryModel } from '../../models/history.model';
import { HistoryService } from '../../services/history/history.service';
import { AccountService } from '../../../account/services/account/account.service';

type DateAll = {
  [key: string]: any; // 👈️ variable key
  name: string;
};
@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyDeposit: DepositInterface[];
  history: any[];
  historyTransfer: TransferInterface[];
  accountId = this.accountService.getAccountSubjectOut();
  constructor(
    private readonly historyService: HistoryService,
    private readonly accountService: AccountService
  ) {
    this.history = new Array<object>();
    this.historyDeposit = new Array<DepositInterface>();
    this.historyTransfer = new Array<TransferInterface>();
  }

  ngOnInit(): void {
    if (this.accountId != '')
      sessionStorage.setItem('AccountId', this.accountId);
    console.log('id de cuenta', sessionStorage.getItem('AccountId'));
    let historyConsult = new HistoryModel(
      sessionStorage.getItem('AccountId') as string,
      {
        length: '3',
        page: '0',
      },
      {
        startDate: '0',
        endDate: String(Date.now()),
        startAmount: '0',
        endAmount: '9999999999',
      }
    );
    this.historyService.getDepositAll(historyConsult).subscribe({
      next: (data) => {
        console.log(data);
        this.historyDeposit = data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
      complete: () => {
        console.log('completed');
      },
    });
    this.historyService.getTransferAll(historyConsult).subscribe({
      next: (data) => {
        this.historyTransfer = data;
      },
      error: (err) => {
        console.log(err.error.message);
      },
      complete: () => {
        console.log('completed');
      },
    });
    console.log(this.historyDeposit);
    // this.history
    //   .concat(this.historyDeposit, this.historyTransfer)
    //   .sort((a, b) => Number(a.dateTime) - Number(b.dateTime));
  }
}
