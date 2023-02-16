import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

import { PageTransfersInterface } from '../interfaces';

import { DateRangeModel, PaginationModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private readonly uri = environment.baseUrl + 'transfers/all';

  constructor(private readonly http: HttpClient) { }

  getTransfersByAccountId(
    accountId: string,
    pagination: PaginationModel,
    dateRange?: DateRangeModel
  ):
    Observable<PageTransfersInterface> {
    const body = { pagination, dateRange };
    return this.http.post<PageTransfersInterface>(`${this.uri}/${accountId}`, body);
  }
}
