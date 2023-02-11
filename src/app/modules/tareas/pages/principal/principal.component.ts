import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tareas.interface';
import { TAREAS } from '../../mocks/mock-tareas';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  routeListar: string[] = ['../listar'];
  tareas: number[];

  constructor(private readonly tareaService: TareaService){
    this.tareas = new Array<number>();
  }

  ngOnInit(): void {
    this.tareaService.getAll()
      .subscribe( (tareas) => {
        this.tareas = tareas;
        console.log(tareas)
      });
  }

      
}

