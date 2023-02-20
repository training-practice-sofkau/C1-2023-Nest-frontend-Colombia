import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageAccountsInterface } from 'src/app/modules/account/interfaces';
import { TableDataInterface } from 'src/app/shared/interfaces/table-data.interface';
import { DateRangeModel, PaginationModel } from 'src/app/shared/models';
import { TransactionService } from '../../services/transaction.service';
import { AccountService } from 'src/app/modules/account/services';
import { PageTransactionInterface } from '../../interfaces/page-transaction.interface';

@Component({
  selector: 'sofka-bank-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  accountId!: string;
  pagination!: PaginationModel;
  dateRange!: DateRangeModel;
  accounts!: PageAccountsInterface;
  tableData!: TableDataInterface;
  hiddenCols!: string[];
  titles!: string[];
  transactions!: PageTransactionInterface;

    constructor(
    private readonly route: ActivatedRoute,
    private readonly transaction$: TransactionService,
    private readonly account$: AccountService,

  ) {
    this.accountId = this.route.snapshot.paramMap.get('id') ?? '';
    this.pagination = new PaginationModel(1, 10);
    this.dateRange = new DateRangeModel(new Date('1999-01-01').getTime(), Date.now())
    this.titles = ['Id', 'type', 'Amount', 'Date'];
    this.hiddenCols = [];
  }

  ngOnInit(): void {
    this.getAllAccounts();
    this.getAllTransfersById();
  }

  onDateRange(dateRange: DateRangeModel): void {
    this.dateRange = dateRange;
    this.getAllTransfersById();
  }

  onGetPage(pagination: PaginationModel): void {
    this.pagination = pagination;
    this.getAllTransfersById();
  }

  onAccountId(accountId: any) {
    this.accountId = accountId;
    this.getAllTransfersById();
  }

  getAllTransfersById() {
    this.transaction$.getTransactionsByAccountId(this.accountId, this.pagination, this.dateRange).subscribe({
      next: (data: PageTransactionInterface) => {
        this.transactions = data;
        this.tableData = {
          ...data, titles: this.titles, items: this.format(data.transactions, this.hiddenCols)
        }
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete'),
    })
  }

  getAllAccounts(): void {
    this.account$.getAccounts({ currentPage: 1, range: 100 }).subscribe({
      next: (data) => {
        this.accounts = data
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    })
  }

  format(items: any, hiddenCols: string[]): any[][] {
    if (items === undefined) {
      return [[]]
    }
    const result = []
    if (items[0] === undefined) {
      return [[]];
    }
    const keys = Object.keys(items[0]);
    const indexList: number[] = []
    for (let col of hiddenCols) {
      const index = keys.indexOf(col);
      if (index >= 0) { indexList.push(index) }
    }
    indexList.sort().reverse();
    for (let item of items) {
      const values = Object.values(item);
      const keys = Object.keys(item);
      for (let splice of indexList) {
        values.splice(splice, 1)
        keys.splice(splice, 1)
      }
      const row: { key: string, value: any }[] = []
      for (let i = 0; i < values.length; i++) {
        const a = { key: keys[i], value: values[i] }
        row.push(a)
      }
      result.push(row);
    }
    return result;
  }

}
