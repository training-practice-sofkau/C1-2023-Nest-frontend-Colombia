import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: Date | number | undefined | string): any {
    if(value){
      moment.locale('es')
      return moment(new Date(value), 'YYYYMMDD').fromNow();
    }
  }

}
