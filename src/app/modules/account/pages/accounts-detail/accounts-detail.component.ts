import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountInterface } from '../../interfaces/account.interface';
import { PageAccountsInterface } from '../../interfaces/page-accounts.interface';

@Component({
  selector: 'sofka-bank-accounts-detail',
  templateUrl: './accounts-detail.component.html',
  styleUrls: ['./accounts-detail.component.scss']
})
export class AccountsDetailComponent implements OnInit {

  accounts!: PageAccountsInterface;
  pagination = { currentPage: 1, range: 10}
  totalPages = 1;

  constructor(private readonly account$: AccountService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.account$.getAccounts(this.pagination).subscribe({
      next: (data) => this.handlerSuccess(data),
      error: (err) => this.handlerError(err),
      complete: () => this.totalPages = this.accounts.totalPages
    })
  }
  private handlerSuccess(data: PageAccountsInterface) {
    this.accounts = data;
  }

  private handlerError(err: any) {
    console.log(err)
  }

  getPage(page: number): void {
    this.pagination.currentPage = page;
    this.totalPages = this.accounts.totalPages
    console.log(this.totalPages)
    this.getAll();
  }

}
