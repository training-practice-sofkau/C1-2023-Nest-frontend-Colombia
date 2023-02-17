import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value<1) ? 'Incompleta' : 'Completa';
  }

}
