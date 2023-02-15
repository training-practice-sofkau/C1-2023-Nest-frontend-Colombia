/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todoListModel } from '../../models/todo-list.model';
import { Observable } from 'rxjs';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private readonly HttpClient: HttpClient) {}

  createItem(item: todoListModel): Observable<TodoListI> {
    return this.HttpClient.post<TodoListI>('https://localhost:7281/api/Todoitem/', item);
  }

  getItems(): Observable<TodoListI[]> {
    return this.HttpClient.get<TodoListI[]>('https://localhost:7281/api/Todoitem/');
  }

  getItemById(id: string | null): Observable<TodoListI> {
    return this.HttpClient.get<TodoListI>('https://localhost:7281/api/Todoitem/' + id);
  }

  editItemById(id: string|null, item: todoListModel): Observable<TodoListI> {
    return this.HttpClient.put<TodoListI>('https://localhost:7281/api/Todoitem/'+id, item);
  }

  deleteItemById(id: string|null): Observable<TodoListI> {
    return this.HttpClient.delete<TodoListI>('https://localhost:7281/api/Todoitem/'+id);
  }
}
