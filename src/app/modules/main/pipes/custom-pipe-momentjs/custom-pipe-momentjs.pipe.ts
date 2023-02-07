import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customPipeMomentjs'
})
export class CustomPipeMomentjsPipe implements PipeTransform {
  now = moment()
  transform(date: Date): string {
    return moment(date).endOf('day').fromNow();
  }

}
