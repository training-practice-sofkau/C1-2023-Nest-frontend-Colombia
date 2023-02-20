import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaysBetweenPipe, PhoneNumberPipe, RelativeTimePipe } from './pipes';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DaysBetweenPipe,
    PhoneNumberPipe,
    RelativeTimePipe,
    TableComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DaysBetweenPipe,
    PhoneNumberPipe,
    RelativeTimePipe,
    TableComponent,
  ]
})
export class SharedModule {}