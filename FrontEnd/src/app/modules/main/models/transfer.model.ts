import { IAccountModel } from "./account.model";

export interface ITranfersModel {
  id: string;
  outcome: IAccountModel;
  income: IAccountModel;
  amount: number;
  reason: string;
  date_time: Date | number;
  deleteAt?: Date | number;
}