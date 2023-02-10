import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'relativeTime'
})
export class relativeTime implements PipeTransform {
  transform(value: string): string {
    return "the last fight was " + moment(value).fromNow();
  }
}
