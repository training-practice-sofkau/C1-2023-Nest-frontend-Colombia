import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeData'
})
export class CustomPipeDataPipe implements PipeTransform {

  transform(name: string): string {
    let newName = "";
    let arr = name.split(" ")
    newName = "Bienvenido "+arr[0][0].toUpperCase()+arr[0].slice(1)
    return newName;
  }

}
