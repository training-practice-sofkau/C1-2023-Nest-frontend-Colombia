import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customPipeMomentjs'
})
export class CustomPipeMomentjsPipe implements PipeTransform {
  now = moment()
  transform(date: string): string {
    return moment(date, "YYYYMMDD").fromNow();
  }

}
