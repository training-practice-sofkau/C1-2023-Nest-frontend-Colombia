import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    if (phone === '') {
      return 'escriba un numero por favor';
    } else {
      const cleane = phone.replace(/\D/g, '');
      const match = cleane.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) return match[1] + '-' + match[2] + '-' + match[3];
      else return 'error';
    }
  }
}
