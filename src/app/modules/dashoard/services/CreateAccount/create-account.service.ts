import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountsInterface } from '../../interfaces/accounts.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private readonly httpClient: HttpClient) {}

  CreateAccountService(
    accountTypeId: string,
    CustomerEntityId: string
  ): Observable<AccountsInterface> {
    const newAccount = {
      accontType: accountTypeId,
      CustomerEntityId: CustomerEntityId,
      balance: '0',
    };
    return this.httpClient.post<AccountsInterface>(
      'http://localhost:3000/account/new',
      newAccount
    );
  }
  getAll(customer: string): Observable<AccountsInterface[]> {
    return this.httpClient.get<AccountsInterface[]>(
      'http://localhost:3000/account/customer/' + customer
    );
  }
}
