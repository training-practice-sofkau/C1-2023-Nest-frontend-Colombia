import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarea } from '../../interfaces/tareas.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  constructor(private readonly httpClient: HttpClient) { }

  listar(): Observable<Tarea[]> {
    return this.httpClient.get<Tarea[]>(`${environment.url_backend}/calendar`);
  }

  
}
