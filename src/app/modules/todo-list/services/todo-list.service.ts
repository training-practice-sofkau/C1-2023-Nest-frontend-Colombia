import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddItemModel } from '../models/addItem.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {


baseUrl: string = "https://localhost:7281/api/Todoitem";

constructor(private readonly httpClient: HttpClient){}

saveTodoList(newItem: AddItemModel): Observable<any>{
  return this.httpClient.post(this.baseUrl, newItem);
}

getAllTodoList(): Observable<any>{
  return this.httpClient.get(this.baseUrl);
}
}
