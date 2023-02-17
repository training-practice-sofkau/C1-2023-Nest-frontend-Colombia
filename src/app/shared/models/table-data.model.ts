export class TableDataModel {
  titles: string[];
  values: any[];
  currentPage: number;
  totalPages: number;
  range: number;
  size: number;
  items: any[];
  dateInit?: number | Date;
  dateEnd?: number | Date;

  constructor(
    titles: string[],
    currentPage: number,
    totalPages: number,
    range: number,
    size: number,
    items: any[],
    dateInit?: number | Date,
    dateEnd?: number | Date
  ) {
    this.titles = titles;
    this.items = items;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.range = range;
    this.size = size;
    if (dateInit) this.dateInit = dateInit
    if (dateEnd) this.dateEnd = dateEnd
    const result = []
    for (let a of this.items) {
      result.push(Object.values(a));
    }
    this.values = result;
  }
}