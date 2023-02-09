import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { TAREAS } from '../../mocks/mock-tareas';

@Component({
  selector: 'sofka-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.scss']
})
export class ListarTareaComponent {
  resultados: Tarea[] = TAREAS;

}
