import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(powerDate: number): string {
    if(powerDate > 10 && powerDate <= 30){
      return 'Debil'
    }else if (powerDate > 30 && powerDate < 50){
      return 'Resistente'
       }else if (powerDate > 50 && powerDate < 75){
          return 'Fuerte'
          }else if(powerDate > 75){
             return 'Poderoso'
               }else{
                  return 'Solo es un Humano'
              }

  }
}
