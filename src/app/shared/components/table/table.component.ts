import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateRangeModel } from '../../models/date-range.model';
import { PaginationModel } from '../../models';
import { TableDataInterface } from '../../interfaces/table-data.interface';
import { AccountInterface } from '../../../modules/account/interfaces/account.interface';

@Component({
  selector: 'sofka-bank-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data!: TableDataInterface;
  @Input() name!: string;
  @Input() selected!: string;
  @Input() options!: AccountInterface[];
  @Output() getPagination = new EventEmitter<PaginationModel>();
  @Output() getDateRange = new EventEmitter<DateRangeModel>();
  @Output() getSelected = new EventEmitter<string>();
  @Input() hiddenCols!: string[];
  titles!: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.titles = this.data.titles;
  }

  changeSelected(id: string): void {
    this.selected = id;
    this.getSelected.emit(this.selected);
  }

  changeRange(range: number): void {
    this.data.range = range;
    this.getPagination.emit({ currentPage: this.data.currentPage, range: this.data.range })
  }

  getPage(page: number): void {
    this.data.currentPage = page;
    this.getPagination.emit({ currentPage: this.data.currentPage, range: this.data.range })
  }

  valueTypeOperation(value: any): string{
    return ''
  }
}
