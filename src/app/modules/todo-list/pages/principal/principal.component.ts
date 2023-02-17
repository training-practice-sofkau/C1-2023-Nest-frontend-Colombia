/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { AuthService } from '../../../main/services/auth/auth.service';
/**
 * Componente principal que muestra una lista de elementos de tareas pendientes.
 *
 * @remarks
 * Este componente es parte de la aplicación Todo List.
 *
 * @beta
 */
@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  /**
   * Ruta para crear un nuevo elemento.
   */
  routeNewItem: string[];

  /**
   * Lista de elementos de tareas pendientes.
   */
  todoList: TodoListI[];

  /**
   * Identificador único del usuario actual.
   */
  uid: string | null;

  /**
   * Nombre de usuario que se muestra en la pantalla.
   */
  displayName: string = '';

  /**
   * Crea una nueva instancia de la clase PrincipalComponent.
   *
   * @param todoListService - El servicio TodoListService se utiliza para obtener la lista de elementos de tareas pendientes.
   * @param authService - El servicio AuthService se utiliza para realizar la autenticación y cierre de sesión del usuario.
   */
  constructor(
    private readonly todoListService: TodoListService,
    private readonly authService: AuthService    ) {
    this.routeNewItem = ['new-item'];
    this.todoList = new Array<TodoListI>();
    this.uid = '';

  }

  /**
   * Se ejecuta cuando se inicializa el componente.
   */
  ngOnInit(): void {
    this.uid = localStorage.getItem('uid');
    console.log(this.uid);
    const storedDisplayName = localStorage.getItem('displayName');
    if(storedDisplayName == 'null'){
      this.displayName = '';
    }else{
    this.displayName = storedDisplayName !== null ? storedDisplayName : ''
    }
    console.log(this.displayName);

    this.todoListService.getItemByUId(this.uid).subscribe({
      next: (data) =>  {data.forEach((item) => this.todoList.push(item)); data.forEach((item) => console.log(item));},
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
  }

  /**
   * Muestra los detalles del elemento de la tarea seleccionado en la consola.
   *
   * @param item - El elemento de la tarea seleccionado.
   */
  myFc(item: TodoListI): void {
    console.log(item);
  }

  /**
   * Cierra la sesión del usuario actual.
   */
  logout(): void {
    this.authService.SignOut();
  }
}
