import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../../auth/interfaces';
import { Observable } from 'rxjs';
import { DepositInterface } from '../interfaces/deposit.interface';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private readonly uri = environment.baseUrl + 'deposits/all'
  private currentUser!: UserInterface;
  private headers!: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.setUser(this.getUser());
  }

  getDepositsByAccountId(id: string): Observable<DepositInterface> {
    return this.http.get<DepositInterface>(this.uri);
  }

  private setUser(user: UserInterface): void {
    this.currentUser = user;
    if (user) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.currentUser.data.token}`,
      })
    }
  }

  private getUser(): UserInterface {
    return <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''));
  }
}
