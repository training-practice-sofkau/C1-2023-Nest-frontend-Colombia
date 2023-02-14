import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.scss']
})
export class ListarTareaComponent {
  routeDetalles: string[];
  tareas: IgetTarea[];

  constructor(private readonly tareaService: TareaService, private rutaActiva: ActivatedRoute){
    this.routeDetalles = ['../detalle'];
    this.tareas = new Array<IgetTarea>();
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe( params => {
      console.log(params['dia']);

      this.tareaService.getId(params['dia'])
        .subscribe(tareas => {
          this.tareas = tareas;
          console.log(tareas);
        })

    })
  }
}
