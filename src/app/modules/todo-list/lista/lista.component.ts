import { Component, OnInit } from '@angular/core';
import { AddItemModel } from '../models/addItem.model';
import { ITodoItem } from '../models/TodoList.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{
  agregar: string[];
  //editar: string[];
  eliminar: string[];
  detalles: string[];
  salir: string[];

  tareas: ITodoItem[];

  uidUser: string;


  constructor(private readonly todoListService: TodoListService){
    //this.editar = ["editar"];
    this.agregar = ["agregar"];
    this.eliminar = ["eliminar"];
    this.detalles = ["detalles"];
    this.salir = ["../"];

    this.uidUser = localStorage.getItem('uid') ?? '';

    this.tareas = new Array<ITodoItem>();
  }


  ngOnInit(): void {
    this.todoListService.getAllTodoList().subscribe({
      next: data => (this.tareas = data.filter(tarea => tarea.uidUser === this.uidUser)),
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    })

  }

}
