import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipes'
})
export class MypipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }



  constructor() {


  }





}
