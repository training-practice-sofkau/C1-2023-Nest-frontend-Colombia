import { AccountsInterface } from '../../dashoard/interfaces/accounts.interface';

export interface IResDeposit {
  id: string;
  account: AccountsInterface;
  amount: number;
}
