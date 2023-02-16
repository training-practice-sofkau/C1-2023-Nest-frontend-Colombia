import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DepositInterface } from '../../interfaces/Deposit.deposit';
import { TransferInterface } from '../../interfaces/transfer.interface';
import { HistoryModel } from '../../models/history.model';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private readonly httpClient: HttpClient) {}
  getDepositAll(history: HistoryModel): Observable<DepositInterface[]> {
    return this.httpClient.post<DepositInterface[]>(
      'http://localhost:3000/deposit/all',
      history
    );
  }
  getTransferAll(history: HistoryModel): Observable<TransferInterface[]> {
    return this.httpClient.post<TransferInterface[]>(
      'http://localhost:3000/transfer/history',
      history
    );
  }
  getTransferAllIn(history: HistoryModel): Observable<TransferInterface[]> {
    return this.httpClient.post<TransferInterface[]>(
      'http://localhost:3000/transfer/income',
      history
    );
  }
  getTransferAllOut(history: HistoryModel): Observable<TransferInterface[]> {
    return this.httpClient.post<TransferInterface[]>(
      'http://localhost:3000/transfer/outcome',
      history
    );
  }
}
