import { UserModel } from '../models/user.model';

export interface IUsers {
  length: number;
  data: UserModel[];
}
