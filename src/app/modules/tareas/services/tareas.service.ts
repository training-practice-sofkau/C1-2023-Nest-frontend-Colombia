import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareasI  } from '../interfaces/tareas.interface';
import { crearTareaI } from '../interfaces/crearTarea';
import { actualizarTareaI } from '../interfaces/actualizarTarea';

@Injectable({providedIn: 'root'})
export class TareasService {

    constructor(private readonly httpClient: HttpClient) { }


    getAll(): Observable<TareasI[]>{
      return this.httpClient.get<TareasI[]>('https://localhost:7281/api/ToDo');
     }

    getTareaId(id: string | null): Observable<TareasI>{
      return this.httpClient.get<TareasI>('https://localhost:7281/api/ToDo/' + id);
     }

    postTarea(tarea: crearTareaI): Observable<crearTareaI>{
      return this.httpClient.post<crearTareaI>('https://localhost:7281/api/ToDo', tarea);
     }

    putTarea(tarea : actualizarTareaI): Observable<actualizarTareaI>{
      return this.httpClient.put<actualizarTareaI>('https://localhost:7281/api/ToDo/', tarea);
     }

    deleteTarea(id: string|null): Observable<TareasI> {
      return this.httpClient.delete<TareasI>('https://localhost:7281/api/ToDo/' + id);
     }

}
