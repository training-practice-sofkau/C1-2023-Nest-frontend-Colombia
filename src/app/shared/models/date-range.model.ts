export class DateRangeModel {
  dateInit: number;
  dateEnd?: number;
  constructor(dateInit: number,
    dateEnd?: number,) {
    this.dateInit = dateInit;
    if (dateEnd) this.dateEnd = dateEnd
  }
}