import { Component} from '@angular/core';
import { crearTareaI } from '../../interfaces/crearTarea';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-crearTareas',
  templateUrl: './crearTareas.component.html',
  styleUrls: ['./crearTareas.component.css']
})
export class CrearTareasComponent {
  tarea: crearTareaI;

  constructor(private readonly tareaService: TareasService){
    this.tarea = {
      title: '',
      description: '',
      responsible: '',
      priority: '',
      isCompleted: false
    };
  }

  crear(){
    console.log(this.tarea);
    this.tareaService.postTarea(this.tarea).
    subscribe(data => {
        console.log(data);
    });
  }



}
