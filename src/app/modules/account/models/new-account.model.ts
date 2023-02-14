export class NewAccountModel {
  customerId: string;
  accountTypeId: string;

  constructor(
    customerId: string,
    accountTypeId: string,
  ) {
    this.customerId = customerId;
    this.accountTypeId = accountTypeId;
  }
}