import { Component, OnInit } from '@angular/core';
import { AddItemModel } from '../models/addItem.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{
  agregar: string[];
  editar: string[];
  eliminar: string[];
  detalles: string[];

  //tareas: any[];


  constructor(private readonly todoListService: TodoListService){
    this.editar = ["editar"];
    this.agregar = ["agregar"];
    this.eliminar = ["eliminar"];
    this.detalles = ["detalles"];
  }

}
