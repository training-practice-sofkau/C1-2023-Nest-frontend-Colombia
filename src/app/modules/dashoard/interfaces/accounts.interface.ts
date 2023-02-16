import { userInterface } from './user-get.interface';

export interface AccountsInterface {
  id: string;
  balance: number;
  state: boolean;
  customer: userInterface;
  accountType: {
    id: string;
    name: string;
    state: boolean;
  };
}
