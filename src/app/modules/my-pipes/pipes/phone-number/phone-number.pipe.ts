import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (phoneNumber) {
      const areaCodeStr = phoneNumber.slice(0, 3);
      const midSectionStr = phoneNumber.slice(3, 6);
      const lastSectionStr = phoneNumber.slice(6, 10);

      return `${areaCodeStr}-${midSectionStr}-${lastSectionStr}`;
    }
    throw new Error('No enviaste un número');
  }
}
