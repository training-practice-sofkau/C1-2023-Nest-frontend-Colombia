import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  transform(value: string, data?: string): string {
    return `Hola ${value.toUpperCase()} ` + (data ?? 'aquí estamos');
  }
}
