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
  tareasFiltradas: IgetTarea[];
  termino: string;
  bandera: boolean;

  constructor(private readonly tareaService: TareaService, private readonly sidebarService: SidebarService){
    this.termino = '';
    this.bandera = true;
    this.tareas = new Array<IgetTarea>();
    this.tareasFiltradas = new Array<IgetTarea>();
  }

  ngOnInit(): void {
    this.tareaService.getAll(localStorage.getItem('uid')).subscribe({
      next: tarea => (this.tareas = tarea.sort((a, b) => a.dia - b.dia)),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });
  }


  buscar( termino: string ) {
    this.bandera = false;
    this.termino = termino;
    this.tareas.forEach(element => {
      if(this.termino.toLowerCase() == element.title.toLowerCase()){
        this.tareasFiltradas.push(element);
      }
    });
    
  }

}
