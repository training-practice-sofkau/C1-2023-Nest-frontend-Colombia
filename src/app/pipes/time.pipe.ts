import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(seconds: number, showSecs: boolean = false ): unknown {
    let minute: number | string = Math.floor((seconds / 60)% 60);
    minute =(minute< 10)? '0' + minute : minute;
    let second: number | string = seconds % 60;
    second =(second<10)?'0'+second : second;

    if(showSecs){
      return 'Seconds:' + seconds + '=>'+ minute + ':' + second;
    }else{
      return minute + ':' + second;
    } 
  }
}
