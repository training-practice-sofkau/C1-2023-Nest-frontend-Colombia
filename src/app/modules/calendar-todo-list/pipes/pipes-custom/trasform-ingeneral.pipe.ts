import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'trasformIngeneral'
})
export class TrasformIngeneralPipe implements PipeTransform {

  transform(value: number ): void{
    moment().calendar();
  }

}
