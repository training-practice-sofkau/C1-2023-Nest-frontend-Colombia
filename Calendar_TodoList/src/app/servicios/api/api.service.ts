import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TareaI } from 'src/app/modelos/tarea.interface';
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

  getAllTareas( ):Observable<TareaI[]>{
    let direccion = this.url + "AllItems/Get";
    return (this.http.get<TareaI[]>(direccion));
  }

  getSingleTarea(id: any): Observable<TareaI>{
    let direccion = this.url + id + "/UncompleteItems/Get";
    return (this.http.get<TareaI>(direccion));
  }
  putTarea(form: TareaI){
    let direccion = this.url + "/UpdateItemAll/";// + id;
    return this.http.put<ResponseI>(direccion, form);

  }
  deleteTarea(form:TareaI):Observable<ResponseI>{
    let direccion = this.url; //+ "/" + id;
    let options ={
      headers: new HttpHeaders({
        'Conten-type':'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, options);
  }

}
