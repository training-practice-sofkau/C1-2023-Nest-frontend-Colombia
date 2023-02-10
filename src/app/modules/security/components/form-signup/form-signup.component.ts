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
      this.documentTypeId,
      this.document,
      this.fullName,
      this.email,
      this.phone,
      this.password
    );
    this.customerService.createCustomer(customer).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.info("completado"),
    });
  }

  ngOnInit(): void {}
}
