import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DaysBetweenPipe } from './pipes/days-between/days-between.pipe';
import { PhoneNumberPipe } from './pipes/phone-number/phone-number.pipe';
import { RelativeTimePipe } from './pipes/relative-time/relative-time.pipe';

@NgModule({
  declarations: [
    DaysBetweenPipe,
    PhoneNumberPipe,
    RelativeTimePipe
  ],
  imports: [CommonModule],
  exports: [
    DaysBetweenPipe,
    PhoneNumberPipe,
    RelativeTimePipe
  ]
})
export class SharedModule {}