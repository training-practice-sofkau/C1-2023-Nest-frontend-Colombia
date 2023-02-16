import { TransferInterface } from "./transfer.Interface";

export interface PageTransfersInterface {
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  accounts: TransferInterface[];
}