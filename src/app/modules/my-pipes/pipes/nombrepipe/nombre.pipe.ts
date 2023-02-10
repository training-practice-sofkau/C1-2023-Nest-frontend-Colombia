import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(combrecompleto: string): string {
    if (combrecompleto) {
      const parts: string[] = combrecompleto.split(' ');
      parts.reverse();
      return `${parts[0]} ${parts[1]}`;
    }
    throw new Error('No se ha enviado un nombre');
  }

}
