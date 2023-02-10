import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string):string{
    return '(' + phone.slice(0,3) + ') ' + phone.slice(3,6) + '-' + phone.slice(6,10);
  }

}
