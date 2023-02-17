import { Component } from '@angular/core';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-listar-todo',
  templateUrl: './listar-todo.component.html',
  styleUrls: ['./listar-todo.component.scss']
})
export class ListarTodoComponent {
  tareas: IgetTarea[];

  constructor(private readonly tareaService: TareaService){
    this.tareas = new Array<IgetTarea>();
  }

  ngOnInit(): void {
    this.tareaService.getAll(localStorage.getItem('uid')).subscribe({
      next: tarea => (this.tareas = tarea.sort((a, b) => a.dia - b.dia)),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });
  }
}
