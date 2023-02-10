import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { TAREAS } from '../../mocks/mock-tareas';
import { TareaServiceService } from '../../services/tareaService/tarea-service.service';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  resultados: Tarea[] = TAREAS;
  routeListar: string[];

  constructor(private readonly tareaService: TareaServiceService){
    this.routeListar = ['../listar'];
  }
}
