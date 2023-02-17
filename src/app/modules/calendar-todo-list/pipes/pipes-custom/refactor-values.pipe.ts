import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refactorValues'
})
export class RefactorValuesPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value === true) {
      return 'sí esta completada';
    } else return 'no esta completada';
  }

}
