import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../../auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageTransfersInterface } from '../interfaces/page-transfers.interface';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { DateRangeModel } from '../../../shared/models/date-range.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private readonly uri = environment.baseUrl + 'transfers/';
  private currentUser!: UserInterface;
  private headers!: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.setUser(this.getUser());
  }

  getTransfersByAccount(pagination: PaginationModel, dateRange?: DateRangeModel):
    Observable<PageTransfersInterface> {
    const body = { pagination, dateRange }
    return this.http.post<PageTransfersInterface>(this.uri, body);
  }

  private setUser(user: UserInterface): void {
    this.currentUser = user;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.currentUser.data.token}`,
    })
  }

  private getUser(): UserInterface {
    return <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? '');
  }
}
