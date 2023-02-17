import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueBooleanToString',
})
export class BooleanToStringPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) {
      return 'sí';
    } else return 'no';
  }
}
