import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'account-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent implements OnInit {
  constructor(
    private readonly accountService: AccountService,
    private router: Router
  ) {}
  registerAccount(accountTypeId: string): void {
    const newCustomer = this.accountService
      .createAccount(accountTypeId, localStorage.getItem('id') as string)
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => {
          console.log(err.error.message);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.error.message,
            showConfirmButton: false,
            timer: 3500,
          });
        },
        complete: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'cuenta creada',
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload();
        },
      });
  }

  ngOnInit(): void {}
}
