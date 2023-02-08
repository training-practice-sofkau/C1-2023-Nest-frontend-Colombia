import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'tiempo'
})
export class TiempoPipe implements PipeTransform {

  transform(fecha: string): string {
    if (fecha) {
      return moment(fecha, 'YYYY').fromNow();
    }
    throw new Error('No hay fechas enviadas');
  }
}
