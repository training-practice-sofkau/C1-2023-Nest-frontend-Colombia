import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../services';
import { NewAccountModel } from '../../models';
import { PageAccountsInterface } from '../../interfaces';
import { AccountTypeEnum } from '../../enums';
import { BackgroundColorService } from '../../../../shared/services/background-color.service';

@Component({
  selector: 'sofka-bank-accounts-detail',
  templateUrl: './accounts-detail.component.html',
  styleUrls: ['./accounts-detail.component.scss']
})
export class AccountsDetailComponent implements OnInit {

  accounts!: PageAccountsInterface;
  pagination = { currentPage: 1, range: 10 }
  totalPages = 1;

  constructor(
    private readonly account$: AccountService,
    readonly router: Router,
    private readonly backgroundColor$: BackgroundColorService,
    ) { }

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
    this.backgroundColor$.color = !this.backgroundColor$.color;
    this.backgroundColor$.updateColor.emit(!this.backgroundColor$.color);
  }

  onDeposits(color: boolean): void{
    this.backgroundColor$.color = color
    this.backgroundColor$.updateColor.emit(color);
    //this.router.navigate(['../deposits'])
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
