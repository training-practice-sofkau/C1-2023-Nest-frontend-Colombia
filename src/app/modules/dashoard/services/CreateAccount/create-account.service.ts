import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
