import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemToDo } from '../models/item.model';
import { Observable } from 'rxjs';
import { IAddItem } from '../interfaces/addItem.interface';
import { IItems } from '../interfaces/items.interface';
import { environment } from 'src/environments/environment';
import { itemDetail } from '../models/itemDetail.model';
import { IEditAllItem } from '../interfaces/editAllItem.interface';
import { IDeleteItem } from '../interfaces/deleteItem.interface';
import { IEditIsCompleteItem } from '../interfaces/editIsCompleted.interface';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor(private readonly httpClient: HttpClient) {}

  addItemToDo(itemToDo: itemToDo): Observable<IAddItem> {
    return this.httpClient.post<IAddItem>(environment.urlApiToDoList, itemToDo);
  }

  getAllAvailable(): Observable<IItems> {
    return this.httpClient.get<IItems>(
      environment.urlApiToDoList +
        '/AllItemsAvailable/' +
        localStorage.getItem('uidUser')
    );
  }

  getAllByUser(): Observable<IItems> {
    return this.httpClient.get<IItems>(
      environment.urlApiToDoList +
        '/AllItemsByUser/' +
        localStorage.getItem('uidUser')
    );
  }

  getById(id: string): Observable<itemDetail[]> {
    return this.httpClient.get<itemDetail[]>(
      environment.urlApiToDoList + '/ToDoItem/' + id
    );
  }

  editItem(id: string, item: itemDetail): Observable<IEditAllItem> {
    return this.httpClient.put<IEditAllItem>(
      environment.urlApiToDoList + '/UpdateItemAll/' + id,
      item
    );
  }

  delete(id: string): Observable<IDeleteItem> {
    return this.httpClient.delete<IDeleteItem>(
      environment.urlApiToDoList + '/' + id
    );
  }
}
