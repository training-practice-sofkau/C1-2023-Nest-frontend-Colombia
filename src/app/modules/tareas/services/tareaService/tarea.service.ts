import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../../interfaces/tareas.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private readonly httpClient: HttpClient) { }

 getAll(): Observable<number[]>{
  return this.httpClient.get<number[]>('https://localhost:7282/calendar');
 }


 getId(dia: number): Observable<Tarea[]>{
  return this.httpClient.get<Tarea[]>('https://localhost:7282/calendar/'+dia);
 }
}
