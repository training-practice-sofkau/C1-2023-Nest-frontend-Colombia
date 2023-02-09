import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { TAREAS } from '../../mocks/mock-tareas';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  resultados: Tarea[] = TAREAS;
  routeListar: string[];

  constructor(){
    this.routeListar = ['../listar'];
  }
}
