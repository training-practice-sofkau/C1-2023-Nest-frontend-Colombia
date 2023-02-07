import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(date: string): string {
    moment.locale('es');
    return moment(date, "YYYY-MM-DD").calendar();
  }

}
