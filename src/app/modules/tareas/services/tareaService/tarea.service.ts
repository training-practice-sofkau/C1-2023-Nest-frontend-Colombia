import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private readonly httpClient: HttpClient) { }

 getAll(): Observable<number[]>{
  return this.httpClient.get<number[]>(environment.url_backend_calendar+'/calendar');
 }


 getId(dia: number): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(environment.url_backend_calendar+'/calendar/'+dia);
 }

 getTarea(id: number): Observable<IgetTarea[]>{
  return this.httpClient.get<IgetTarea[]>(environment.url_backend_tarea+'/ToDo/'+id);
 }
}
