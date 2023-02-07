import { Component, Input, OnInit } from '@angular/core';
import { CustomerInterface } from '../../../modules/main/interfaces/customer.interface';

@Component({
  selector: 'sofka-bank-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newCustomer: CustomerInterface = {
    fullName: 'fullName',
    birthDate: '1990-01-01',
    document: '22',
    email: 'email@email.com',
    password: 'password',
    phone: 'phone',
    avatarUrl: 'avatarUrl'
  }
}
