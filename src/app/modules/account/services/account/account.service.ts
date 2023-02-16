import { Injectable } from '@angular/core';
import { AccountModel } from '../../models/account.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountInterface } from '../../interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private readonly httpClient: HttpClient) {}

  accountId = new BehaviorSubject<string>('');
  setAccountOut(customerId: string) {
    this.accountId.next(customerId);
  }
  getAccountObservOut(): Observable<string> {
    return this.accountId.asObservable();
  }
  getAccountSubjectOut() {
    return this.accountId.getValue();
  }

  createAccount(
    accountTypeId: string,
    customerId: string
  ): Observable<AccountInterface> {
    const newAccount = { accountTypeId: accountTypeId, customerId: customerId };
    return this.httpClient.post<AccountInterface>(
      'http://localhost:3000/account/',
      newAccount
    );
  }
  getAll(customer: string): Observable<AccountInterface[]> {
    return this.httpClient.get<AccountInterface[]>(
      'http://localhost:3000/account/customer/' + customer
    );
  }
}
