import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomersService } from 'src/app/modules/security/services/customer/customers.service';
import Swal from 'sweetalert2';
import { AccountInterface } from '../../interfaces/account.interface';
import { AccountService } from '../../services/account/account.service';
import { CustomerInterface } from '../../../security/interfaces/customer.interface';

@Component({
  selector: 'account-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  accounts: AccountInterface[];
  customerId = '';
  @Output() changeAccountId = new EventEmitter<string>();
  constructor(
    private readonly accountService: AccountService,
    private customerService: CustomersService
  ) {
    this.accounts = new Array<AccountInterface>();
  }
  accionesModal(accountId: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola cuenta:' + accountId,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  seleccionar(accountId: string) {
    const account = this.accounts.find((data) => data.id === accountId);
    if (account) {
      account.selected = true;
      this.changeAccountId.emit(account.id);
    }
    this.accounts.map((data) => {
      if (data.id !== accountId) data.selected = false;
    });
  }
  ngOnInit(): void {
    this.customerId = localStorage.getItem('id') as string;
    this.accountService
      .getAll(this.customerId)
      .subscribe((data) => (this.accounts = data));
  }
}
