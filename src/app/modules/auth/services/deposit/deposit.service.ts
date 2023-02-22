import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateDeposit } from '../../models/createDeposit.model';
import { IResDeposit } from '../../models/Rescreatedeposit.model';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  constructor(private readonly httpClient: HttpClient) {}

  createDeposit(deposit: ICreateDeposit): Observable<IResDeposit> {
    return this.httpClient.post<IResDeposit>(
      'http://localhost:3000/deposit/create',
      deposit
    );
  }

  getDepositsById(id: string): Observable<IResDeposit> {
    return this.httpClient.get<IResDeposit>(
      'http://localhost:3000/deposit/' + id
    );
  }
}
