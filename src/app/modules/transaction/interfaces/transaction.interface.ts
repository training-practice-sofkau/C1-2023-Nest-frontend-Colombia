export interface TransactionInterface {
  id: string;
  type: string;
  amount: number;
  dateTime: number | Date;
}