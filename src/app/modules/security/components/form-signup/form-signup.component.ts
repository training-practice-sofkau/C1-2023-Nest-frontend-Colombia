import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  frmSingUp: FormGroup;
  constructor(
    private readonly customerService: CustomersService,
    private router: Router
  ) {
    this.frmSingUp = new FormGroup({
      documentTypeId: new FormControl(null, [Validators.required]),
      document: new FormControl(null, Validators.required),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g)
        ),
      ]),
    });
  }
  registerCustomer(): void {
    this.frmSingUp.get('documentTypeId');
    const newCustomer = this.customerService
      .createCustomer(this.frmSingUp.getRawValue())
      .subscribe({
        next: (data) => {
          this.customerService.setCustomer(data.account.customer.id);
          debugger;
          localStorage.setItem('id', data.account.customer.id);
          localStorage.setItem('token', data.access_token);
        },
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
