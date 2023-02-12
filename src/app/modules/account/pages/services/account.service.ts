import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AccountInterface } from '../../interfaces/account.interface';
import { PaginationModel } from '../../../../shared/models/pagination.model';
import { UserInterface } from '../../../auth/interfaces/user.interface';
import { PageAccountsInterface } from '../../interfaces/page-accounts.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly uri = environment.baseUrl + 'accounts/all'
  private currentUser!: UserInterface;
  private headers!: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.setUser(this.getUser());
  }

  getAccounts(pagination: PaginationModel): Observable<PageAccountsInterface> {
    return this.http.post<PageAccountsInterface>(this.uri, pagination, { headers: this.headers });
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

