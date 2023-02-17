/* eslint-disable prettier/prettier */
/**
 * Componente para eliminar un elemento de una lista de tareas
 * @class
 * @implements {OnInit}
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';

@Component({
  selector: 'sofka-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit	{
  /**
   * El elemento de la lista de tareas que se va a eliminar
   * @type {TodoListI}
   */
  item: TodoListI;
  /**
   * El identificador único del elemento de la lista de tareas que se va a eliminar
   * @type {string|null|undefined}
   */
  itemId: string | null | undefined;
  /**
   * El identificador único del elemento de la lista de tareas que se va a eliminar
   * @type {string|null|undefined}
   */
  routePrincipal: string[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private todoListService: TodoListService)
  {
    this.routePrincipal = ['../../'];

    this.item = {
      id: '',
      idUser: '',
      title: '',
      description: '',
      responsible: '',
      isCompleted: 0,
      state: 0,
  };
}
/**
 * Función que se llama cuando se inicia el componente
 */
ngOnInit(): void {
  this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
  this.todoListService.getItemById(this.itemId).subscribe({
    next: (data) =>  {this.item = data;},
    error: err =>  console.log(err),
    complete: () =>  console.log('complete'),
  });
  //console.log(this.itemId);
}

/**
 * Función para eliminar el elemento de la lista de tareas y actualizar la vista
 */
sendItem(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService.deleteItemById(this.itemId).subscribe({
      next: (data) =>  {this.item = data;},
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
    console.log(this.item);
  }

  /**
 * Función para volver a la página principal
 */
  return(): void {
    this.router.navigate(['principal']);
  }

}
