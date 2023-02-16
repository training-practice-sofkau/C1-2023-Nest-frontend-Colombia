import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccountService } from '../../services/CreateAccount/create-account.service';

@Component({
  selector: 'sofka-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.scss'],
})
export class CreateAccountsComponent {
  constructor(
    private readonly createAccountService: CreateAccountService,
    private router: Router
  ) {}

  createAccount(accountTypeId: string): void {
    this.createAccountService
      .CreateAccountService(accountTypeId, localStorage.getItem('id') as string)
      .subscribe({
        next: data => console.log(data),
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
