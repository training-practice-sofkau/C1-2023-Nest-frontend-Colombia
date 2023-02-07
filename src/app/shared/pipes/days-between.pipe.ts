import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysBetween'
})
export class DaysBetweenPipe implements PipeTransform {

  transform(dateStart: Date, dateEnd?: Date): any {
    if (dateEnd) return (dateEnd.getTime() - dateStart.getTime()) * (60 * 60 * 24)
    //else return (new Date().getDate() - dateStart.getDate()) * (60 * 60 * 24)
    else return (Date.now() - dateStart.getTime()) / (1000 * 60 * 60 * 24)
  }
}
