import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemToDo } from '../models/item.model';
import { Observable } from 'rxjs';
import { IAddItem } from '../interfaces/addItem.interface';
import { IItems } from '../interfaces/items.interface';
import { environment } from 'src/environments/environment';
import { itemDetail } from '../models/itemDetail.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor(private readonly httpClient: HttpClient) {}

  addItemToDo(itemToDo: itemToDo): Observable<IAddItem> {
    return this.httpClient.post<IAddItem>(
      environment.urlApiToDoList,
      itemToDo.getData()
    );
  }

  getAll(): Observable<IItems[]> {
    return this.httpClient.get<IItems[]>(
      environment.urlApiToDoList + '/AllDays'
    );
  }

  getById(id: string): Observable<itemDetail[]> {
    return this.httpClient.get<itemDetail[]>(
      environment.urlApiToDoList + '/ToDoItem/' + id
    );
  }
}
