/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todoListModel } from '../../models/todo-list.model';
import { Observable } from 'rxjs';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { itemI } from '../../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private readonly HttpClient: HttpClient) {}

  createItem(item: todoListModel): Observable<TodoListI> {
    return this.HttpClient.post<TodoListI>('https://localhost:7281/api/Todoitem/', item.getData());
  }

  getItems(): Observable<TodoListI[]> {
    return this.HttpClient.get<TodoListI[]>('https://localhost:7281/api/Todoitem/');
  }

  getItemById(id: string | null): Observable<TodoListI> {
    return this.HttpClient.get<TodoListI>('https://localhost:7281/api/Todoitem/' + id);
  }

  editItemById(id: string|null, item: todoListModel): Observable<TodoListI> {
    return this.HttpClient.put<TodoListI>('https://localhost:7281/api/Todoitem/'+id, item.getData());
  }
}
