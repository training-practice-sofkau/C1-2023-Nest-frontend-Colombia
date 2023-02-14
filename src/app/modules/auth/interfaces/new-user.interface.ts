import { NewUserModel } from '../models/new-user-models';

export interface INewUser {
  success: boolean;
  data: NewUserModel;
}
