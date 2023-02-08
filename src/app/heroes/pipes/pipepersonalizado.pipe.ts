import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipepersonalizado'
})
export class PipepersonalizadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
