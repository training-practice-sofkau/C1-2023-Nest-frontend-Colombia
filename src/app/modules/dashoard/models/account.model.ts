export class AccountModel {
  accountTypeId: string;
  customerId: string;
  balance: string;
  state: boolean;

  constructor(
    accountTypeId: string,
    customerId: string,
    balance: string,
    state: boolean
  ) {
    this.accountTypeId = accountTypeId;
    this.customerId = customerId;
    this.balance = balance;
    this.state = state;
  }
}
