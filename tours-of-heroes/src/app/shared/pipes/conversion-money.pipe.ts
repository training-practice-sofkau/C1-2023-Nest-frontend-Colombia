import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversionMoney'
})
export class ConversionMoneyPipe implements PipeTransform {

  transform(value: number, fromConversion: string, toConversion: string = 'EUR'): number {
    if(fromConversion === 'COP' && toConversion ==='EUR') {
      return Number(value/5096);
    }else{
      throw new Error(`Coversion fail`);
    
    }
    }
   

}
