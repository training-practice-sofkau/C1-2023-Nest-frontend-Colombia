export class NewTransferModel {
  outcomeId: string;
  incomeId: string;
  amount: number;
  reason: string;

  constructor(
    outcomeId: string,
    incomeId: string,
    amount: number,
    reason: string,
  ) {
    this.outcomeId = outcomeId;
    this.incomeId = incomeId;
    this.amount = amount;
    this.reason = reason;
  }
}