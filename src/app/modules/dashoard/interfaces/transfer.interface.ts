import { userInterface } from './user-get.interface';

export interface TransferInterface {
  id: string;
  amount: number;
  income: userInterface;
  outcome: userInterface;
  reason: string;
  dateTime: number;
}
