export class NewAccountModel {
  'customerEntityId': string;
  'accontType': string;
  'balance': string;

  constructor(customerEntityId: string, accounType: string, balance: string) {
    this.customerEntityId = customerEntityId;
    this.accontType = accounType;
    this.balance = balance;
  }
  getData(): { customerEntityId: string; accontType: string; balance: string } {
    return {
      customerEntityId: this.customerEntityId,
      accontType: this.accontType,
      balance: this.balance,
    };
  }
}
