export interface AccountInterface {
  id: string;
  customerId: string;
  accountType: { id: string, name: string };
  balance: number;
}