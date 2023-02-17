import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryPipe'
})
export class SalaryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
