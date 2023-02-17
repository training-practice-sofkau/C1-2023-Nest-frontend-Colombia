/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';

/**
 * Componente para visualizar un elemento de la lista de tareas.
 *
 * @class
 */
@Component({
  selector: 'sofka-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit{
/**
   * Objeto que representa el elemento que se va a visualizar.
   *
   * @property {TodoListI} item
   */
  item: TodoListI;
/**
   * Ruta principal para la navegación.
   *
   * @property {string[]} routePrincipal
   */
  routePrincipal: string[];
   /**
   * ID del elemento que se va a visualizar.
   *
   * @property {string|null|undefined} itemId
   */
  itemId: string | null | undefined;
/**
   * Constructor del componente.
   *
   * @constructor
   * @param {Router} router - Servicio de enrutamiento.
   * @param {ActivatedRoute} activatedRoute - Servicio de ruta activa.
   * @param {TodoListService} todoListService - Servicio para obtener la lista de tareas.
   */
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
   * Método que se ejecuta cuando el componente se inicializa.
   *
   * @method ngOnInit
   * @return {void}
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
   * Método que se ejecuta cuando se presiona el botón de regresar.
   *
   * @method return
   * @return {void}
   */
  return(): void {
    this.router.navigate(['principal']);
  }
}
