import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositModel } from '../../../main/models/deposit.model';
import { DepositInterface } from '../../interfaces/Deposit.deposit';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  constructor(private readonly httpClient: HttpClient) {}
  /**
   * It takes a DepositModel object as an argument, and returns an Observable of DepositInterface
   * @param {DepositModel} deposit - DepositModel - this is the deposit object that we are sending to the
   * server.
   * @returns Observable<DepositInterface>
   */
  createDeposit(deposit: DepositModel): Observable<DepositInterface> {
    return this.httpClient.post<DepositInterface>(
      'http://localhost:3000/deposit/',
      deposit
    );
  }
  /**
   * This function is used to get the deposit details of a particular deposit
   * @param {string} depositId - The id of the deposit you want to get.
   * @returns The deposit object
   */
  getDeposit(depositId: string): Observable<DepositInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `access_token ${localStorage.getItem('access_token')}`,
      }),
    };
    return this.httpClient.get<DepositInterface>(
      'http://localhost:3000/transfer/select/' + depositId,
      httpOptions
    );
  }
}
