import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private readonly httpClient: HttpClient) {}

    createCustomer(customer: Customer){
      return this.httpClient.post('http://localhost:3000/user',customer.getData())
    }
}
