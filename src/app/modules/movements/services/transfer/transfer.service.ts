import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TransferInterface } from '../../interfaces/transfer.interface';
import { TransferModel } from '../../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  outComeId = new BehaviorSubject<string>('');
  inComeId = new BehaviorSubject<string>('');
  transferId = new BehaviorSubject<string>('');
  setCustomerOut(customerId: string) {
    this.outComeId.next(customerId);
  }
  setTransferId(transferId: string) {
    this.transferId.next(transferId);
  }
  setCustomerIn(customerId: string) {
    this.inComeId.next(customerId);
  }
  getCustomerObservOut(): Observable<string> {
    return this.outComeId.asObservable();
  }
  getTransferIdObserv(): Observable<string> {
    return this.transferId.asObservable();
  }
  getTransferIdSubject() {
    return this.transferId.getValue();
  }
  getCustomerSubjectOut() {
    return this.outComeId.getValue();
  }
  getCustomerObservIn(): Observable<string> {
    return this.inComeId.asObservable();
  }
  getCustomerSubjectIn() {
    return this.inComeId.getValue();
  }
  constructor(private readonly httpClient: HttpClient) {}

  createTransfer(transfer: TransferModel): Observable<TransferInterface> {
    return this.httpClient.post<TransferInterface>(
      'http://localhost:3000/transfer/',
      transfer
    );
  }
  getTransfer(transferId: string): Observable<TransferInterface> {
    return this.httpClient.get<TransferInterface>(
      'http://localhost:3000/transfer/select/' + transferId
    );
  }
}
