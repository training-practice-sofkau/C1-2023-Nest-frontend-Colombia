import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SuperPoder'
})
export class SuperPoder implements PipeTransform {

  transform(value: boolean): string {
    if(value)
      return 'tiene inpac trueno';
    return 'No tiene inpac trueno';
  }

}
