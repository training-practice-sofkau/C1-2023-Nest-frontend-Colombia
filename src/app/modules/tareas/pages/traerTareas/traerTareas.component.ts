import { Component } from '@angular/core';
import {TareasI} from "../../interfaces/tareas.interface";
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-traerTareas',
  templateUrl: './traerTareas.component.html',
  styleUrls: ['./traerTareas.component.css']
})
export class TraerTareasComponent {

  tareas: TareasI[];

  constructor( private readonly tareaservice: TareasService){

    this.tareas = new Array<TareasI>();
  }
  ngOnInit(): void {
    this.tareaservice.getAll().subscribe({
      next: tareas => (this.tareas=tareas),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });
  }


}
