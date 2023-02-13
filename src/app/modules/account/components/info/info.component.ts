import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { AccountModel } from '../../models/account.model';
import Swal from 'sweetalert2';
import { CustomersService } from '../../../security/services/customer/customers.service';
import { Subscription } from 'rxjs';
import { AccountInterface } from '../../interfaces/account.interface';

@Component({
  selector: 'account-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  customerId="";
  accounts  = new Array<AccountInterface>;
  constructor(private readonly accountService: AccountService, private customerService:CustomersService) {
  }

  ngOnInit(): void {
    // this.customerService.getCustomerObserv().subscribe((id) => this.customerId = id)
    //   this.accountService.getAll(this.customerId).subscribe({
    //     next: (data) => this.accounts = data,
    //     error: (err) => {
    //       console.log(err.error.message);
    //       Swal.fire({
    //         position: 'top-end',
    //         icon: 'error',
    //         title: err.error.message,
    //         showConfirmButton: false,
    //         timer: 3500,
    //       });
    //     },
    //     complete: () => {console.log("completed")
    //     }
    //   });
  }
}
