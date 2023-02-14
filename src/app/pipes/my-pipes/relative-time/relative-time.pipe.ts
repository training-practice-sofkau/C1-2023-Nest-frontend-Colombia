import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(date: string): string {
    if (date) {
      return moment(date, 'YYYY').fromNow();
    }
    throw new Error('Sin fecha');
  }

}
