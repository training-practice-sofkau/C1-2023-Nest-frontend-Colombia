import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts(): Observable<Account[]> {
  const accounts = of(accounts);
  return accounts;
}
}
