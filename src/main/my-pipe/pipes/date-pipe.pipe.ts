import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(birthday: string): string {
    return moment(birthday, "YYYYMMDD").fromNow();
  }

}
