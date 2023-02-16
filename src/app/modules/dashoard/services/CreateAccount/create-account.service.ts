import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountsInterface } from '../../interfaces/accounts.interface';
import { NewAccountModel } from '../../models/new-Account-model';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private readonly httpClient: HttpClient) {}

  CreateAccountService(account: NewAccountModel) {
    return this.httpClient.post(
      'http://localhost:3000/account/new',
      account.getData()
    );
  }
  getAll(customer: string): Observable<AccountsInterface[]> {
    return this.httpClient.get<AccountsInterface[]>(
      'http://localhost:3000/account/customer/' + customer
    );
  }
}
