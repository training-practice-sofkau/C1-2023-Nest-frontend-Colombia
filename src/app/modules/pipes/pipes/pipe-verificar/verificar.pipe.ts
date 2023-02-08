import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verificar'
})
export class VerificarPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value)
      return 'Puede volar';
    return 'No puede volar';
  }

}
