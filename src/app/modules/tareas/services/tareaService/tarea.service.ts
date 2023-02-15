import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { IpostTarea } from '../../interfaces/tareas-post.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private readonly httpClient: HttpClient) { }

 getAll(): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(`${environment.url_backend_tarea}/ToDo`);
 }

 getId(dia: number): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(`${environment.url_backend_tarea}/ToDo/${dia}`);
 }

 getTarea(id: number): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(`${environment.url_backend_tarea}/ToDo/${id}`);
 }

 postTarea(tarea: IpostTarea): Observable<IgetTarea>{
  return this.httpClient.post<IgetTarea>(`${environment.url_backend_tarea}/ToDo`, tarea);
 }

 putTarea(id: number, tarea: IpostTarea): Observable<any>{
  return this.httpClient.put<any>(`${environment.url_backend_tarea}/ToDo/${id}`, tarea);
 }
}
