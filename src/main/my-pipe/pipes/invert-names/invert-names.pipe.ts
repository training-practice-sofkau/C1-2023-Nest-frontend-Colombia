import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertNames'
})
export class InvertNamesPipe implements PipeTransform {

  transform(fullname: string): string {
    if(fullname){
      const parts: string[] = fullname.split(' ');
      if(parts.length == 4){
        return parts[2] + " " + parts[3] + " " + parts[0] + " " + parts[1];
      }
      if(parts.length == 3){
        return parts[1] + " " + parts[2] + " " + parts[0];
      }
      if(parts.length == 2){
        return parts[1] + " " + parts[0];
      }
    }
    throw new Error("No se envió el nombre");
  }

}
