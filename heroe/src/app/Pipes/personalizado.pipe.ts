import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class personalizado implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
