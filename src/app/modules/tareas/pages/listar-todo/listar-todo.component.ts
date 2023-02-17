import { Component } from '@angular/core';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';

@Component({
  selector: 'sofka-listar-todo',
  templateUrl: './listar-todo.component.html',
  styleUrls: ['./listar-todo.component.scss']
})
export class ListarTodoComponent {
  tareas: IgetTarea[];
  estadoSidebar: boolean;

  constructor(private readonly tareaService: TareaService, private readonly sidebarService: SidebarService){
    this.estadoSidebar = sidebarService.estado;
    this.tareas = new Array<IgetTarea>();
  }

  ngOnInit(): void {
    this.tareaService.getAll(localStorage.getItem('uid')).subscribe({
      next: tarea => (this.tareas = tarea.sort((a, b) => a.dia - b.dia)),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });
    this.sidebarService.estado = !this.estadoSidebar;
    this.estadoSidebar = this.sidebarService.estado;
    
  }
}
