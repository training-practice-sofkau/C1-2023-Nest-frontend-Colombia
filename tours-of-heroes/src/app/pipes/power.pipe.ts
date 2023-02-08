import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(powerDate: number): string {
      const powerLevels =[
        {limite: 10 , value : 'Solo es un humano'},
        {limite: 30 , value : 'Debil'},
        {limite: 50 , value : 'Resistente'},
        {limite: 75 , value : 'Fuerte'},
        {limite: Infinity , value : 'Poderoso' },
      ];
      return powerLevels.find(level=> powerDate <= level.limite)!.value;
  }
}