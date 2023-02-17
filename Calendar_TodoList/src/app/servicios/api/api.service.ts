import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemI } from 'src/app/modelos/item.interface';
import { ListaItemI2 } from 'src/app/modelos/ListaItem2.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'https://localhost:7281/api/ToDoList/'

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllItems():Observable<ListaItemI2>{
    let direccion = this.url + "AllItems/Get";
    return (this.http.get<ListaItemI2>(direccion));
  }

  //Metodo Put
  getSingleItem(id: String): Observable<ItemI>{
    let direccion = this.url + id + "/UpdateAll";
    return (this.http.get<ItemI>(direccion));
    //https://localhost:7281/api/ToDoList/id/UpdateAll
  }

  putItem(form: ItemI, id : string):Observable<ResponseI>{
    let direccion = this.url + id + "UpdateItemAll";// + id;
   // https://localhost:7281/api/ToDoList/id/UpdateAll
    return this.http.put<ResponseI>(direccion, form);
  }

  deleteItem(id:string):Observable<ResponseI>{
    let direccion = this.url + "/" + id;
    //https://localhost:7281/api/ToDoList/id
    let options ={
      headers: new HttpHeaders({
        'Conten-type':'application/json'
      }),
      //body:form
    }
    return this.http.delete<ResponseI>(direccion, options);
  }

}
