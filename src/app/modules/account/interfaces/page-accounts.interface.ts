import { AccountInterface } from './account.interface';

export interface PageAccountsInterface {
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  accounts: AccountInterface[];
}