import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
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

  constructor(private readonly customerService: CustomersService) {
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }
  registercustomer(): void {
    const customer = new Customer(
      'c822487e-5e89-4a49-98d5-50ce60b300b1',
      '1234567893',
      'Julian Garcia Arenas3',
      'correo3@example.com',
      '32062014283',
      'Password3'
    );
    this.customerService.createCustomer(customer).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.info("completado"),
    });
  }

  ngOnInit(): void {}
}
