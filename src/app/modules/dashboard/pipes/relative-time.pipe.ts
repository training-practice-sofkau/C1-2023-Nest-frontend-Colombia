import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(lastAccident: string): string {
    return moment(lastAccident,'YYYYMMDD').fromNow();
  }
}
