import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'relativeTime'
})
export class relativeTime implements PipeTransform {
  transform(value: any): any {
    return "the last fight was " + moment(value).fromNow();
  }
}
