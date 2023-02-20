import { Component, Input, OnInit } from '@angular/core';
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
  empty!: boolean;

  constructor(private readonly toDoList$: ToDoListService) {
    this.routeDashboard = ['../'];
    this.empty = false;
  }

  response(respuesta: string) {
    console.log(respuesta);
  }

  ngOnInit(): void {
    this.toDoList$.getAllAvailable().subscribe({
      next: data => {
        this.calendarToDo = data;
        this.empty = false;
      },
      error: err => {
        console.log(err);
        this.empty = false;
      },
    });
  }
}
