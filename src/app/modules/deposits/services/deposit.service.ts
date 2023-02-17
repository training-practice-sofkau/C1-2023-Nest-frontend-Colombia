import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

import { DepositInterface } from '../interfaces';

import { DateRangeModel, PaginationModel } from 'src/app/shared/models';
import { NewDepositModel } from '../models/new-deposit.model';
import { PageDepositInterface } from '../interfaces/page-deposit.interface';

@Injectable({
  providedIn: 'root'
})

export class DepositService {

  private readonly uri = environment.baseUrl + 'deposits/';

  constructor(private readonly http: HttpClient) { }

  getDepositsByAccountId(
    accountId: string,
    pagination: PaginationModel,
    dateRange?: DateRangeModel
  ): Observable<PageDepositInterface> {
    const body = { pagination, dateRange };
    console.log(body);
    return this.http.post<PageDepositInterface>(`${this.uri}all/${accountId}`, body);
  }

  getAllDeposits(
    pagination: PaginationModel,
    dateRange?: DateRangeModel
  ): Observable<PageDepositInterface> {
    const body = { pagination, dateRange };
    return this.http.post<PageDepositInterface>(`${this.uri}all`, body);
  }

  addDeposit(deposit: NewDepositModel): Observable<DepositInterface> {
    return this.http.post<DepositInterface>(`${this.uri}add`, deposit);
  }
}
