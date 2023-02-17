import { Component, OnInit } from '@angular/core';
import { IItems } from '../../interfaces/items.interface';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'sofka-listado-to-do-list',
  templateUrl: './listado-to-do-list.component.html',
  styleUrls: ['./listado-to-do-list.component.scss'],
})
export class ListadoToDoListComponent implements OnInit {
  //rutas
  routeDashboard: string[];
  // Data
  calendarToDo!: IItems;

  constructor(private readonly toDoList$: ToDoListService) {
    this.routeDashboard = ['../'];
  }
  ngOnInit(): void {
    this.toDoList$.getAllAvailable().subscribe({
      next: data => (this.calendarToDo = data),
      error: err => console.log(err),
    });
  }
}
