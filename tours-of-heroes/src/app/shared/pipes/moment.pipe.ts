import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class MomentPipe implements PipeTransform {

  transform(date: string): string {
    moment.localeData('es');
    return moment(date, "YYYY-MM-DD").calendar();
  }

}
