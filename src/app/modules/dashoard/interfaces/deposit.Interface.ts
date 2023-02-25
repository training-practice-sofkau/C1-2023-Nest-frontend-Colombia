import { AccountsInterface } from './accounts.interface';

export interface depositInterface {
  id: string;
  account: AccountsInterface;
  amount: 0;
  dateTime: Date | number;
}
