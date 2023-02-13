import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ListaTareasI } from 'src/app/modelos/listatareas.interface';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaDoble } from 'src/app/modelos/listadoble.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'https://localhost:7281/api/ControllersGeneral'

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllTareas( ):Observable<ListaDoble>{
    let direccion = this.url + '/GetAllFecha/Get';
    return (this.http.get<ListaDoble>(direccion));
  }

  getSingleTarea(id: string): Observable<TareaI>{
    let direccion = this.url + "tarea?id=" + id;
    return (this.http.get<TareaI>(direccion));
  }

  putTarea(form: TareaI){
    let direccion = this.url + "tarea";
    return this.http.put<ResponseI>(direccion, form);

  }

  deleteTarea(form:TareaI):Observable<ResponseI>{
    let direccion = this.url + "tarea";
    let options ={ headers: new HttpHeaders({ 'Conten-type':'application/json' }), body:form };
    return (this.http.delete<ResponseI>(direccion, options));
  }

  postTarea(form:TareaI):Observable<ResponseI>{
    let direccion = this.url + "Tareas";
    return (this.http.post<ResponseI>(direccion, form));

  }
}
