import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(name: string):string{
    let nameArray = name.split(' ');
    let firstName = nameArray[0];
    let lastName = nameArray[1];
    return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.toUpperCase();
  }

}
