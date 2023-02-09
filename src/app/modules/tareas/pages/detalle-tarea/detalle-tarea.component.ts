import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { TAREAS } from '../../mocks/mock-tareas';

@Component({
  selector: 'sofka-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.scss']
})
export class DetalleTareaComponent {
  resultados: Tarea[] = TAREAS;
}
