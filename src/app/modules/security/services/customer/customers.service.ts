import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CustomerModel } from '../../models/customer.model';
import { AccountService } from '../../../account/services/account/account.service';
import { SingUpInterface } from '../../interfaces/sing-up.interface';
import { AccountInterface } from '../../../account/interfaces/account.interface';
import { singInModel } from '../../models/sing-in.model';
import { SingInInterface } from '../../interfaces/sing-in.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerId = new BehaviorSubject<string>('');
  setCustomer(customerId: string) {
    this.customerId.next(customerId);
  }
  getCustomerObserv(): Observable<string> {
    return this.customerId.asObservable();
  }
  getCustomerSubject() {
    return this.customerId.getValue();
  }
  constructor(private readonly httpClient: HttpClient) {}

  createCustomer(customer: CustomerModel): Observable<SingUpInterface> {
    console.log('entro');
    let response = this.httpClient.post<SingUpInterface>(
      'http://localhost:3000/security/sign-up',
      customer.getData()
    );
    return response;
  }
  singIn(customer: singInModel): Observable<SingInInterface> {
    let response = this.httpClient.post<SingInInterface>(
      'http://localhost:3000/security/sign-in',
      customer.getData()
    );
    return response;
  }
}
