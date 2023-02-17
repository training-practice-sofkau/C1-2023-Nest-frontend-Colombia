/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
//import { todoListModel } from '../../models/todo-list.model';
import { TodoListService } from '../../services/todo-list/todo-list.service';

/**
 * Componente encargado de agregar un nuevo item a la lista de tareas pendientes
 * @class
 */
@Component({
  selector: 'sofka-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent {
  /**
   * Formulario de entrada de datos para el nuevo item
   * @type {FormGroup}
   */
  form: FormGroup;

  /**
   * ID del usuario actual obtenido desde el LocalStorage
   * @type {string|null}
   */
  idUser: string | null;

  /**
   * Título del nuevo item
   * @type {string}
   */
  title: string;

  /**
   * Descripción del nuevo item
   * @type {string}
   */
  description: string;

  /**
   * Responsable del nuevo item
   * @type {string}
   */
  responsible: string;

  /**
   * Ruta para volver a la página principal
   * @type {string[]}
   */
  routePrincipal: string[];

  /**
   * Ruta para ir a la página de experiencia laboral
   * @type {string[]}
   */
  routeExperienciaLaboral: string[];

  /**
   * Crea una instancia del componente NewItemComponent.
   * @constructor
   * @param {FormBuilder} fb - Constructor del formulario
   * @param {TodoListService} todoListService - Servicio para agregar nuevos items a la lista
   */
  constructor(
    private fb: FormBuilder,
    private readonly todoListService: TodoListService
  ) {
    this.idUser = localStorage.getItem('uid');
    this.title = '';
    this.description = '';
    this.responsible = '';

    this.routePrincipal = ['../'];
    this.routeExperienciaLaboral = ['../experiencia-laboral'];

    this.form = new FormGroup({
      idUser: new FormControl(this.idUser, [Validators.required]),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      responsible: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }

  /**
   * Agrega un nuevo item a la lista
   * @returns {void}
   */
  sendItem(): void {
    //const item = new todoListModel(this.title, this.description, this.responsible);
    this.todoListService.createItem(this.form.getRawValue()).subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => console.log('Complete'),
    });
  }
}
