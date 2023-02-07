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
    birthDate: new Date('1990-01-01'),
    document: '22',
    email: 'email@email.com',
    password: 'password',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    amount: 4555.99
  }

  getPercentage(object: Object): number {
    let len = 0;
    let value = 0;
    let json = JSON.parse(JSON.stringify(object));
    for (let x in object) {
      len++
      if(json[x]!=='') {value++}
    }
    return value/len
  }
}
