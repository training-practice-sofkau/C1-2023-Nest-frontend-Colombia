import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DepositModel } from '../../../main/models/deposit.model';
import { DepositInterface } from '../../interfaces/Deposit.deposit';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  constructor(private readonly httpClient: HttpClient) {}
  createDeposit(deposit: DepositModel): Observable<DepositInterface> {
    return this.httpClient.post<DepositInterface>(
      'http://localhost:3000/deposit/',
      deposit
    );
  }
  getDeposit(depositId: string): Observable<DepositInterface> {
    return this.httpClient.get<DepositInterface>(
      'http://localhost:3000/transfer/select/' + depositId
    );
  }
}
