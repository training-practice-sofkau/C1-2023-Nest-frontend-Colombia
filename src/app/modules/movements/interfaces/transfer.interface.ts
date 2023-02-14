import { CustomerInterface } from '../../security/interfaces/customer.interface';
export interface TransferInterface{
id:string;
amount:number;
income:CustomerInterface;
outcome:CustomerInterface;
reason:string;
dateTime:number;
}
