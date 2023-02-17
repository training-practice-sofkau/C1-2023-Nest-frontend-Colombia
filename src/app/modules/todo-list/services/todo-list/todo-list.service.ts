/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Clase encargada de manejar el servicio del todo list.
 *
 * @class TodoListService
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todoListModel } from '../../models/todo-list.model';
import { Observable } from 'rxjs';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  /**
   * Crea una instancia de TodoListService.
   *
   * @constructor
   * @param {HttpClient} HttpClient - Servicio HTTP utilizado para hacer las peticiones.
   * @param {Router} router - Servicio utilizado para navegar a diferentes rutas.
   * @param {AngularFireAuth} afAuth - Servicio utilizado para manejar la autenticación.
   */
  constructor(private readonly HttpClient: HttpClient, private router: Router, private afAuth: AngularFireAuth) {}

  /**
   * Crea un nuevo elemento en el todo list.
   *
   * @param {todoListModel} item - Objeto que representa el elemento a crear.
   * @return {Observable<TodoListI>} - Observador que devuelve el objeto creado.
   */
  createItem(item: todoListModel): Observable<TodoListI> {
    return this.HttpClient.post<TodoListI>('https://localhost:7281/api/Todoitem/', item);
  }

   /**
   * Obtiene todos los elementos del todo list.
   *
   * @return {Observable<TodoListI[]>} - Observador que devuelve un arreglo con todos los elementos.
   */
  getItems(): Observable<TodoListI[]> {
    return this.HttpClient.get<TodoListI[]>('https://localhost:7281/api/Todoitem/');
  }

  /**
   * Obtiene los elementos del todo list que pertenecen a un usuario específico.
   *
   * @param {string | null} uId - ID del usuario para el que se quieren obtener los elementos.
   * @return {Observable<TodoListI[]>} - Observador que devuelve un arreglo con los elementos obtenidos.
   */
  getItemByUId(uId: string | null): Observable<TodoListI[]> {
    return this.HttpClient.get<TodoListI[]>('https://localhost:7281/api/Todoitem/' + uId);
  }

  /**
   * Obtiene un elemento específico del todo list.
   *
   * @param {string | null} id - ID del elemento que se quiere obtener.
   * @return {Observable<TodoListI>} - Observador que devuelve el elemento obtenido.
   */
  getItemById(id: string | null): Observable<TodoListI> {
    return this.HttpClient.get<TodoListI>('https://localhost:7281/api/Todoitem/' + id);
  }
   /**
   * Edita un elemento específico del todo list.
   *
   * @param {string | null} id - ID del elemento que se quiere editar.
   * @param {todoListModel} item - Objeto que representa el elemento editado.
   * @return {Observable<TodoListI>} - Observador que devuelve el elemento editado.
   */
  editItemById(id: string|null, item: todoListModel): Observable<TodoListI> {
    return this.HttpClient.put<TodoListI>('https://localhost:7281/api/Todoitem/'+id, item);
  }
  /**
 * Elimina un elemento de la lista de tareas por su ID
 *
 * @param {string | null} id - ID del elemento a eliminar
 * @return {Observable<TodoListI>} - El elemento eliminado
 */
  deleteItemById(id: string|null): Observable<TodoListI> {
    return this.HttpClient.delete<TodoListI>('https://localhost:7281/api/Todoitem/'+id);
  }
  /**
 * Cierra la sesión del usuario actual y elimina sus credenciales del almacenamiento local
 *
 * @return {Promise<void>} - Una promesa que resuelve cuando la sesión se cierra y las credenciales se eliminan del almacenamiento local
 */
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    });
  }
}
