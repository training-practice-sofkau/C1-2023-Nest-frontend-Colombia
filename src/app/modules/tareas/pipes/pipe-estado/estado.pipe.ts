import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(estado: boolean): string {
    if(estado){
      return 'Completada';
    }else{
      return 'Pendiente';
    }
  }

}
