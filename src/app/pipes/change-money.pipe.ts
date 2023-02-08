import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeMoney'
})
export class ChangeMoneyPipe implements PipeTransform {
  transform(value: number, fromCurrency: string, toCurrency: string = 'USD'): number {
    if (fromCurrency === 'COP' && toCurrency === 'USD') {
      return value / 3875;
    } else {
      throw new Error(`Conversion from ${fromCurrency} to ${toCurrency} is not supported.`);
    }
  }
}