import { DepositInterface } from './deposit.interface';

export interface PageDepositInterface {
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  deposits: DepositInterface[];
  dateInit?: number | Date;
  dateEnd?: number | Date;
}