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

 getAll(): Observable<number[]>{
  return this.httpClient.get<number[]>(`${environment.url_backend_calendar}/calendar`);
 }


 getId(dia: number): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(`${environment.url_backend_calendar}/calendar/${dia}`);
 }

 getTarea(id: number): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(`${environment.url_backend_tarea}/ToDo/${id}`);
 }

 postTarea(tarea: IpostTarea): Observable<IgetTarea>{
  return this.httpClient.post<IgetTarea>(`${environment.url_backend_calendar}/calendar`, tarea);
 }

 putTarea(dia:number, idTarea:number, tarea: IpostTarea): Observable<IgetTarea>{
  return this.httpClient.put<IgetTarea>(`${environment.url_backend_calendar}/Dia/${dia}/Tarea/${idTarea}`, tarea);
 }
}
