export interface TableDataInterface {
  titles: string[];
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  items: any[][];
  dateInit?: number | Date;
  dateEnd?: number | Date;
}