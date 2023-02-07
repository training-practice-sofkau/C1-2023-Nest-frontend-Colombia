import { Component, Input, OnInit } from '@angular/core';
import { CustomerInterface } from '../../../modules/interfaces/customer.interface';

@Component({
  selector: 'sofka-bank-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newCustomer: CustomerInterface = { fullName: 'dd', birthDate: Date.now(), document: '22', email: 'ddd', password: '555', phone: '555' }

}
