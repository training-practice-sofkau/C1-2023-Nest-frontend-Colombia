import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saved'
})
export class SavedPipe implements PipeTransform {

  transform(savedbyhero: any): any {
    if(savedbyhero === "") return 'no ha salvado a nadie';
    if(savedbyhero === "0") return 'no ha salvado a nadie';
    if(savedbyhero <"0")
    return (savedbyhero  < "50")? 'ha salvado menos de 50 personas' : 'ha salvado mas de 50 personas';
  }

}
