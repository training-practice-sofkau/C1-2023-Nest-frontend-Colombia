import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddItemModel } from '../models/addItem.model';
import { Observable } from 'rxjs'
import { ITodoItem } from '../models/TodoList.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {


baseUrl: string = "https://localhost:7281/api/Todoitem";

constructor(private readonly httpClient: HttpClient){}

saveTodoList(newItem: AddItemModel): Observable<any>{
  return this.httpClient.post(this.baseUrl, newItem);
}

getAllTodoList(): Observable<ITodoItem[]>{
  return this.httpClient.get<ITodoItem[]>(this.baseUrl);
}
}
