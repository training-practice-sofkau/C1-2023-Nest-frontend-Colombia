import { TransferInterface } from "./transfer.Interface";

export interface PageTransfersInterface {
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  transfers: TransferInterface[];
  dateInit?: number | Date;
  dateEnd?: number | Date;
}