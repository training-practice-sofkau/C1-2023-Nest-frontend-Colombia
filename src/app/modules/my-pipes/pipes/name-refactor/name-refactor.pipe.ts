import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameRefactor',
})
export class NameRefactorPipe implements PipeTransform {
  transform(fullName: string): string {
    if (fullName) {
      const parts: string[] = fullName.split(' ');
      parts.reverse();
      return `${parts[0]} ${parts[1]}`;
    }
    throw new Error('No enviaste un nombre');
  }
}
