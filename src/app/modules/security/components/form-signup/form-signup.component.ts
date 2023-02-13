import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerModel } from '../../models/customer.model';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  selector: 'account-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss'],
})
export class FormSignupComponent implements OnInit {
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;

  constructor(
    private readonly customerService: CustomersService,
    private router: Router
  ) {
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }
  registerCustomer(): void {
    const customer = new CustomerModel(
      this.documentTypeId,
      this.document,
      this.fullName,
      this.email,
      this.phone,
      this.password
    );
    const newCustomer = this.customerService
      .createCustomer(customer)
      .subscribe({
        next: (data) =>{
          this.customerService.setCustomer(data.account.customer.id)
          localStorage.setItem('id', data.account.customer.id);
          localStorage.setItem('token', data.access_token);},
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
            title: 'Inicio de sesión correcto',
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.router.navigate(['account']);
          }, 1500);
        },
      });
  }

  ngOnInit(): void {}
}
