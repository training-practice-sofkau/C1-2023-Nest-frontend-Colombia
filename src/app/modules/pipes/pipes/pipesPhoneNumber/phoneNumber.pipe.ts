import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class phoneNumber implements PipeTransform {

  transform(cel: string): string {
    if(cel.length != 10){
      return "Numero incorrecto";
    }
    let numFormateado: string = '';
    numFormateado = cel.slice(0,3) + "-" + cel.slice(3,6) + "-" + cel.slice(6,10);
    return numFormateado;
  }

}
