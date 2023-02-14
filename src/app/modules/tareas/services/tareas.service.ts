import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareasI  } from '../interfaces/tareas.interface';
import { environment } from 'src/environments/environment';
import { crearTareaI } from '../interfaces/crearTarea';
import { actualizarTareaI } from '../interfaces/actualizarTarea';

@Injectable({providedIn: 'root'})
export class TareasService {

    constructor(private readonly httpClient: HttpClient) { }


    getAll(): Observable<TareasI[]>{
      return this.httpClient.get<TareasI[]>('https://localhost:7281/api/ToDo');
     }

    postTarea(tarea: crearTareaI): Observable<any>{
      return this.httpClient.post<TareasI>('https://localhost:7281/api/ToDo', tarea);
     }

    putTarea(tarea : actualizarTareaI): Observable<any>{
      return this.httpClient.put<TareasI>('https://localhost:7281/api/ToDo', tarea);
     }

}
