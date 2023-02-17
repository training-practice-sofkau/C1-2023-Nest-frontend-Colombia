import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DateRangeModel, PaginationModel } from 'src/app/shared/models';

import { environment } from 'src/environments/environment';

import { PageTransactionInterface } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly uri = environment.baseUrl + 'transactions/';

  constructor(private readonly http: HttpClient) { }

  getTransactionsByAccountId(
    accountId: string,
    pagination: PaginationModel,
    dateRange?: DateRangeModel
  ):
    Observable<PageTransactionInterface> {
    const body = { pagination, dateRange };
    return this.http.post<PageTransactionInterface>(`${this.uri}all/${accountId}`, body);
  }
}
