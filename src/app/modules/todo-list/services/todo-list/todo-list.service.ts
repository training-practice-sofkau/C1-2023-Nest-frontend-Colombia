/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todoListModel } from '../../models/todo-list.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private readonly HttpClient: HttpClient) {}

  createItem(item: todoListModel) {
    return this.HttpClient.post('https://localhost:7281/api/Todoitem/', item.getData());
  }
}
