import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my-pipe'
})
export class MyPipePipe implements PipeTransform {

  transform(cadena: string, categoria: 'categoria1' | 'categoria2' | 'categoria3'): string {
    return 'hola mundo ' + cadena + ' ';
  }

}
