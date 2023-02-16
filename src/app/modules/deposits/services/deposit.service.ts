import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

import { DepositInterface } from '../interfaces';

import { DateRangeModel, PaginationModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})

export class DepositService {

  private readonly uri = environment.baseUrl + 'deposits/all';

  constructor(private readonly http: HttpClient) { }

  getDepositsByAccountId(
    accountId: string,
    pagination: PaginationModel,
    dateRange?: DateRangeModel
  ): Observable<DepositInterface> {
    const body = { pagination, dateRange };
    return this.http.post<DepositInterface>(`${this.uri}/${accountId}`, body);
  }
}
