import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysBetween'
})
export class DaysBetweenPipe implements PipeTransform {

  transform(dateStart: Date, dateEnd?: Date): any {
    if (dateEnd) return Math.floor((dateEnd.getTime() - new Date(dateStart).getTime()) / (1000 * 3600 * 24))
    else return Math.floor((Date.now() - new Date(dateStart).getTime()) / (1000 * 3600 * 24))
  }
}
