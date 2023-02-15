import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { PageAccountsInterface } from '../../interfaces/page-accounts.interface';
import { Router } from '@angular/router';
import { NewAccountModel } from '../../models/new-account.model';
import { AccountTypeEnum } from '../../enums/account-type.enum';

@Component({
  selector: 'sofka-bank-accounts-detail',
  templateUrl: './accounts-detail.component.html',
  styleUrls: ['./accounts-detail.component.scss']
})
export class AccountsDetailComponent implements OnInit {

  accounts!: PageAccountsInterface;
  pagination = { currentPage: 1, range: 10 }
  totalPages = 1;

  constructor(private readonly account$: AccountService,
    readonly router: Router) { }

  ngOnInit(): void {
    AccountTypeEnum['Checking account']
    this.getAll();
  }

  getAll(): void {
    this.account$.getAccounts(this.pagination).subscribe({
      next: (data) => this.handlerSuccess(data),
      error: (err) => this.handlerError(err),
      complete: () => this.totalPages = this.accounts.totalPages,
    })
  }

  delete(id: string): void {
    this.account$.deleteAccount(id).subscribe({
      next: (data) => this.getAll(),
      error: (err) => this.handlerError(err),
      complete: () => this.totalPages = this.accounts.totalPages,
    })
  }

  add(accountTypeId: 'Checking account' | 'Saving account'): void {
    const newAccount = new NewAccountModel(  AccountTypeEnum[accountTypeId])
    this.account$.createAccount(newAccount).subscribe({
      next: (data) => this.getAll(),
      error: (err) => this.handlerError(err),
      complete: () => this.totalPages = this.accounts.totalPages,
    })
  }

  private handlerSuccess(data: PageAccountsInterface): void {
    this.accounts = data;
  }

  private handlerError(err: any): void {
    console.log(err)
  }

  getPage(page: number): void {
    this.pagination.currentPage = page;
    this.totalPages = this.accounts.totalPages
    this.getAll();
  }


}
