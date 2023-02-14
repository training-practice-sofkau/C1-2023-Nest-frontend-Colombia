import { Component } from '@angular/core';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  routeListar: string[] = ['../listar'];
  tareas: IgetTarea[];

  constructor(private readonly tareaService: TareaService){
    this.tareas = new Array<IgetTarea>();
  }

  ngOnInit(): void {
    this.tareaService.getAll().subscribe({
      next: tareas => (this.tareas = tareas),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });
  }

      
}

