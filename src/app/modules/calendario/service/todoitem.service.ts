import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../interface/item';

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllItems(): Observable<Item[]>{
   return this.http.get<Item[]>(this.baseApiUrl + '/api/items/user/'+localStorage.getItem('uid'))
  }

  addItem(addItemRequest: Item): Observable<Item>{
   return this.http.post<Item>(this.baseApiUrl + '/api/items', addItemRequest);
  }

  getItem(id: string): Observable<Item>{
    return this.http.get<Item>(this.baseApiUrl + '/api/items/'+id)
  }

  updateItem(id: string, updateItemRequest: Item): Observable<Item>{
    return this.http.put<Item>(this.baseApiUrl + '/api/items/'+id,updateItemRequest)
  }

  deleteItem(id: string): Observable<Item>{
    return this.http.delete<Item>(this.baseApiUrl+'/api/items/' + id)
  }

}
