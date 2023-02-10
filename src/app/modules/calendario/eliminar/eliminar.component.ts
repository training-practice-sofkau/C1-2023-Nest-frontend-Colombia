import { Component } from '@angular/core';

@Component({
  selector: 'sofka-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent {
  lista: string[];

  constructor(){
    this.lista = ["../"]
  }
}
