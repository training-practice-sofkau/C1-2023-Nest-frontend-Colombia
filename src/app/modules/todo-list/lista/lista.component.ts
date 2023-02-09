import { Component } from '@angular/core';

@Component({
  selector: 'sofka-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  agregar: string[];
  editar: string[];
  eliminar: string[];
  detalles: string[];

constructor(){
  this.editar = ["editar"];
  this.agregar = ["agregar"];
  this.eliminar = ["eliminar"];
  this.detalles = ["detalles"];
}

}
