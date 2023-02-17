import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'sofka-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  

  buscar() {
    console.log(this.termino);
    this.onEnter.emit( this.termino );
  }

}
