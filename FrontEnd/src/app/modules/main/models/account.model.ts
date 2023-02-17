import { IAccountTypeModel } from "./accountType.model";
import { UserModel } from "./new-user.model";

export interface IAccountModel {
    id: string;
    customer: UserModel;
    accountType: IAccountTypeModel;
    balance: number;
    state: boolean;
    delatedAt?: Date | number;
  }
  