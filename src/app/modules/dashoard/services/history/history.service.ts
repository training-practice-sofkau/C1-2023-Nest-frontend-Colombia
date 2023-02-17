import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { depositInterface } from '../../interfaces/deposit.Interface';


@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private readonly httpClient: HttpClient) {}
  getDepositAll(id: string): Observable<depositInterface[]> {
    return this.httpClient.get<depositInterface[]>(
      'http://localhost:3000/deposit/history/' + id
    );
  }
}
