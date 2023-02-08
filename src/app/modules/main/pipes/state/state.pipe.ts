import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(state: boolean): string {
    if(state) return "Heroe habilitado, es hora de luchar"
    else return "Heroe deshabilitado, es hora de entrenar"
  }

}
