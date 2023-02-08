import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroCel'
})
export class NumeroCelPipe implements PipeTransform {
  
  transform(cel: string): string {
    if(cel.length != 10){
      return "Numero invalido";
    }
    let numeroFormateado: string = '';
    numeroFormateado = cel.slice(0,3) + "-" + cel.slice(3,6) + "-" + cel.slice(6,10);
    return numeroFormateado;
  }

}
