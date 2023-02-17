import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  dia: number;

  constructor(private readonly tareaService: TareaService, private rutaActiva: ActivatedRoute, private router: Router){
    this.dia = 0;
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
    Swal.fire({
      title: 'Eliminar Tarea',
      text: "Está seguro que quiere eliminar la tarea?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(this.id > 0 && result.isConfirmed){
        this.tareaService.deleteTarea(this.id).subscribe({
          next: tarea => {
            console.log(tarea),
            Swal.fire(
              'Eliminada',
              'La Tarea ha sido eliminada correctamente',
              'success'
            )
          },
          error: err => console.log(err),
          complete: () => {console.log('Complete'), this.router.navigate([`/tareas/listar/${this.dia}`]);}
        });
      }
    });
  }
}
