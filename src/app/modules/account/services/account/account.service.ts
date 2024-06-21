import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts!: any

  constructor(private readonly httpClient: HttpClient) { }

  getAccountsByCustomer(id: string): Observable<AccountModel[]>{
    return this.httpClient.get<AccountModel[]>(
      `/api/account/customer/${id}`
    )
  }

  getBalanceByIdAccount(id: string): Observable<number>{
    return this.httpClient.get<number>(
      `/api/account/balance/${id}`
    )
  }

  verifyAmountIntoBalance(id: string): Observable<boolean>{
    return this.httpClient.get<boolean>(
      `/api/account/verifyAmountIntoBalance/${id}`
    )
  }
}
