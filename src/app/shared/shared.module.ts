import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DaysBetweenPipe, PhoneNumberPipe, RelativeTimePipe } from './pipes';

@NgModule({
  declarations: [
    DaysBetweenPipe,
    PhoneNumberPipe,
    RelativeTimePipe,
  ],
  imports: [CommonModule],
  exports: [
    DaysBetweenPipe,
    PhoneNumberPipe,
    RelativeTimePipe,
  ]
})
export class SharedModule {}