import { Component } from '@angular/core';

@Component({
  selector: 'sofka-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {
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
