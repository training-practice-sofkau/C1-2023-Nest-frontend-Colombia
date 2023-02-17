import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: number | undefined): any {
    if (value) {
      //moment.locale('es')
      if (value < (Date.now() - (24 * 60 * 60000))) {
        return value.toLocaleString
      }
      return moment(new Date(value), 'YYYYMMDD').fromNow();
    }
  }

}
