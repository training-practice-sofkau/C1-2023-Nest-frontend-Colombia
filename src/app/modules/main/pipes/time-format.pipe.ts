import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: string): string {
    return moment(value, 'HH:mm').format('hh:mm A');
  }
}
