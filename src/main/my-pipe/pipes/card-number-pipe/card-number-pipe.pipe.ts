import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberPipe'
})
export class CardNumberPipePipe implements PipeTransform {

  transform(cardNumber: string): string {
    if(cardNumber){
      return cardNumber.slice(0,3)+"-"+cardNumber.slice(4,7)+"-"+cardNumber.slice(8,11)+"-"+cardNumber.slice(12,15);
    }
    throw new Error("No se agregó un numero de tarjeta");
  }

}
