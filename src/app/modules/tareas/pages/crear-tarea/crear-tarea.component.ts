import { Component } from '@angular/core';
import { IpostTarea } from '../../interfaces/tareas-post.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss']
})
export class CrearTareaComponent {
  tarea: IpostTarea;

  constructor(private readonly tareaService: TareaService){
    this.tarea = {
      dia: 0,
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
