import { TransactionInterface } from './transaction.interface';

export interface PageTransactionInterface {
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  transactions: TransactionInterface;
  dateInit: number | Date;
  dateEnd: number | Date;
}