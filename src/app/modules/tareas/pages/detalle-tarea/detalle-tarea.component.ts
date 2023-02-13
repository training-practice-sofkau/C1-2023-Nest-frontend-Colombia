import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.scss']
})
export class DetalleTareaComponent {
  tarea: IgetTarea[];

  constructor(private readonly tareaService: TareaService, private rutaActiva: ActivatedRoute){
    this.tarea = new Array<IgetTarea>();
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe( params => {
      this.tareaService.getTarea(params['id'])
        .subscribe(tarea => {
          this.tarea = tarea;
          console.log(tarea);
      })
    })
  }
}
