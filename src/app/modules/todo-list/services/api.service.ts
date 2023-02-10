/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TodoListI } from '../interfaces/todo-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public getTodoList(): Observable<TodoListI[]> {
      return this.http.get<TodoListI[]>('https://jsonplaceholder.typicode.com/todos');
    }

    public getItemById(id: number): Observable<TodoListI[]> {
      return this.http.get<TodoListI[]>('https://jsonplaceholder.typicode.com/todos/' + id);
    }
  }

