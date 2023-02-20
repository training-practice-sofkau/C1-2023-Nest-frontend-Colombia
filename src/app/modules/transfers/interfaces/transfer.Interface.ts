export interface TransferInterface {
  id: string;
  outcomeId: string;
  incomeId: string;
  amount: number;
  reason: string;
  dateTime: Date | number;
}