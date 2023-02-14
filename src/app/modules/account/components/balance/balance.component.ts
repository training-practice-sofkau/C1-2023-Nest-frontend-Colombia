import { Component, Input, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/modules/security/services/customer/customers.service';
import Swal from 'sweetalert2';
import { AccountInterface } from '../../interfaces/account.interface';
import { AccountService } from '../../services/account/account.service';
import { CustomerInterface } from '../../../security/interfaces/customer.interface';

@Component({
  selector: 'account-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  accounts:AccountInterface[];
  customerId="";
  constructor(private readonly accountService: AccountService, private customerService:CustomersService) {
    this.accounts = new Array<AccountInterface>();
  }
  accionesModal(accountId:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola cuenta:'+accountId,
      showConfirmButton: false,
      timer: 1500
    })
  }
  ngOnInit(): void {
    this.customerId = localStorage.getItem("id") as string;
    this.accountService.getAll(this.customerId).subscribe((data) => (this.accounts = data));
  }
}
