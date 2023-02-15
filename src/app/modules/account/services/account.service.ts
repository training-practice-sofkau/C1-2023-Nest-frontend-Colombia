import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private readonly httpClient: HttpClient) { }

  getAccountsByCustomer(id: string): Observable<AccountModel[]>{
    return this.httpClient.get<AccountModel[]>(
      `/api/account/customer/${id}`
    )
  }
}
