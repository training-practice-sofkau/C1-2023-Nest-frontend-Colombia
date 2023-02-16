import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { CustomersService } from '../../../security/services/customer/customers.service';
import { AccountInterface } from '../../interfaces/account.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'account-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  customerId = '';
  AccountId!: string;
  accounts = new Array<AccountInterface>();
  constructor(
    private readonly accountService: AccountService,
    private customerService: CustomersService,
    private readonly router: Router
  ) {}
  getAccountId($event: string) {
    this.AccountId = $event;
    console.log($event);
  }
  history() {
    if (this.AccountId) {
      this.accountService.setAccountOut(this.AccountId);
      this.router.navigate(['movements/']);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Seleccione una cuenta para ver el historial de transacciones',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  ngOnInit(): void {}
}
