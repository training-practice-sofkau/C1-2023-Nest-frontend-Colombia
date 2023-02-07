import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: Date | number | undefined): any {
    if(value){
      console.log(new Date(value))
      return moment(new Date(value), 'YYYYMMDD').fromNow();
    }
  }

}
