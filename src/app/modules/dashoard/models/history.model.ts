export class HistoryModel {
  accountId: string;
  pagination: {
    numberPages: string;
    actualPage: string;
  };

  constructor(
    accountId: string,
    pagination: {
      numberPages: string;
      actualPage: string;
    }
  ) {
    this.accountId = accountId;
    this.pagination = pagination;
  }
}
