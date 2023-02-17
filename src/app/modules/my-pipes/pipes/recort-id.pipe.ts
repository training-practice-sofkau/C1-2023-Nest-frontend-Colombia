import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortId'
})
export class RecortIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
