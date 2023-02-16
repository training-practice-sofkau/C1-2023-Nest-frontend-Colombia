import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaginationModel } from '../../../shared/models/pagination.model';
import { UserInterface } from '../../auth/interfaces/user.interface';
import { PageAccountsInterface } from '../interfaces/page-accounts.interface';
import { NewAccountModel } from '../models/new-account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly uri = environment.baseUrl + 'accounts'

  constructor(private readonly http: HttpClient) {
  }

  getAccounts(pagination: PaginationModel): Observable<PageAccountsInterface> {
    return this.http.post<PageAccountsInterface>(this.uri + '/all', pagination);
  }

  deleteAccount(accountId: string): Observable<boolean> {
    return this.http.delete<boolean>(this.uri + '/' + accountId);
  }

  createAccount(newAccount: NewAccountModel): Observable<boolean> {
    return this.http.post<boolean>(this.uri + '/add', newAccount)
  }
}

