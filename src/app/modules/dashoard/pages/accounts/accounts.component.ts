import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsInterface } from '../../interfaces/accounts.interface';
import { AccountModel } from '../../models/account.model';
import { NewAccountModel } from '../../models/new-Account-model';
import { CreateAccountService } from '../../services/CreateAccount/create-account.service';

@Component({
  selector: 'sofka-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  accounts: AccountsInterface[];
  idOutcome: string;
  constructor(
    private readonly createAccountsService: CreateAccountService,
    private router: Router
  ) {
    this.accounts = new Array<AccountsInterface>();
    this.idOutcome = '';
    this.changeId = new EventEmitter<string>();
  }
  @Output()
  changeId: EventEmitter<string>;

  obtenerOutcome(id: string) {
    localStorage.setItem('outcome', id);
    this.idOutcome = id;
    this.changeId.emit(this.idOutcome);
  }
  ngOnInit(): void {
    const customerId = localStorage.getItem('id') as string;
    this.createAccountsService.getAll(customerId).subscribe({
      next: data => {
        this.accounts = data;
        console.log(data);
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.info('complete');
      },
    });
  }
}
