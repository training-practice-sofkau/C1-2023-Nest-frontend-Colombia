import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewTransfers } from '../interfaces/transfers.model';
import { TransferModel } from '../models/transfer.model';
const url = 'localhost:3000/transfer/outcome/04b571b3-0b96-4828-ab17-f79c5a764333?limit=6&offset=0&startDate=1640995200000&endDate=1652572800000'
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private readonly httpClient: HttpClient) { }

  getAllByOutcome(): Observable<TransferModel[]> {
    return this.httpClient.get<TransferModel[]>(
      `/api/transfer/outcome/f43c57e1-490b-4e2c-a9eb-50b38165ffd7?limit=6&offset=0`
    );
  } 
}
