import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.scss']
})
export class DetalleTareaComponent {
  tarea: IgetTarea[];
  id: number;

  constructor(private readonly tareaService: TareaService, private rutaActiva: ActivatedRoute, private router: Router){
    this.tarea = new Array<IgetTarea>();
    this.id = 0;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe( params => {
      this.id = params['id'];
      this.tareaService.getTarea(params['id'])
        .subscribe(tarea => {
          this.tarea = tarea;
          console.log(tarea);
      });
    })
  }

  eliminar(){
    if(this.id > 0){
      this.tareaService.deleteTarea(this.id)
        .subscribe(tarea => {
          this.tarea = tarea;
          console.log(tarea);
      });
        this.router.navigate(["/tareas/home"]);
    }
  }
}
