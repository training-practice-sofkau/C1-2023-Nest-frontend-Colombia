import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celular'
})
export class CelularPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    if (phoneNumber) {
      const areaCodeStr = phoneNumber.slice(0, 3);
      const midSectionStr = phoneNumber.slice(3, 6);
      const lastSectionStr = phoneNumber.slice(6, 10);

      return `${areaCodeStr}-${midSectionStr}-${lastSectionStr}`;
    }//Esta validacion es basada en el ejemplo presentado por uno de los compañeros de node en la ultima reunion
    throw new Error('No se ha enviado ningun numero');
  }

}
