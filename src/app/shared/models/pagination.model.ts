export class PaginationModel {
  currentPage: number;
  range?: number;
  constructor(currentPage: number,
    range?: number,) {
    this.currentPage = currentPage;
    if (range) this.range = range
  }
}