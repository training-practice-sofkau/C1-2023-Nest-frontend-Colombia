export class NewDepositModel {
  amount: number;
  accountId: string;

  constructor(
    amount: number,
    accountId: string,
  ) {
    this.amount = amount;
    this.accountId = accountId;
  }
}