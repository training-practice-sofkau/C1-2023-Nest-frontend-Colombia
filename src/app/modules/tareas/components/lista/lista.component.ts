import { Component, Input } from '@angular/core';
import { IgetTarea } from '../../interfaces/tareas.interface';

@Component({
  selector: 'sofka-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

 @Input() tareas: IgetTarea[];

  constructor(){
    this.tareas = new Array<IgetTarea>();
  }
}
