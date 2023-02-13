import { Component } from '@angular/core';
import { itemToDo } from '../../models/item.model';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'sofka-agregar-to-do-list',
  templateUrl: './agregar-to-do-list.component.html',
  styleUrls: ['./agregar-to-do-list.component.scss'],
})
export class AgregarToDoListComponent {
  routeDashboard: string[];
  indexDay: string;
  tittle: string;
  description: string;
  responsible: string;

  constructor(private readonly toDoList$: ToDoListService) {
    this.routeDashboard = ['../'];
    this.indexDay = '';
    this.tittle = '';
    this.description = '';
    this.responsible = '';
  }

  sendData(): void {
    const item = new itemToDo(
      parseInt(this.indexDay),
      this.tittle,
      this.description,
      this.responsible
    );
    this.toDoList$.addItemToDo(item).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('completo'),
    });
  }
}
