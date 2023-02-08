import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celular'
})
export class CelularPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
