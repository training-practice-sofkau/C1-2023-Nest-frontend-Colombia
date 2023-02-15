import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  accounts!: AccountModel[]

  constructor(private router: Router,
    private readonly accountService: AccountService){
    }

    ngOnInit(): void {
      this.getAccounts()
    }

    getAccounts(){
      console.log('entra en get account')
      this.accountService.getAccountsByCustomer('Op62qEYSmAMVHn2rHPMlWHh7lBz2').subscribe({
        next: data  => {
          console.log('re ', data)
          this.accounts = data
        },
        error: err => console.error('err', err),
        complete: () => console.info('complete')
      }
      );
    }
}
