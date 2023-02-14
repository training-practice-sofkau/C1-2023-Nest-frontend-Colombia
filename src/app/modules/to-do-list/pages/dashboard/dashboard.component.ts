import { Component, OnInit } from '@angular/core';
import { IItems } from '../../interfaces/items.interface';
import { itemToDo } from '../../models/item.model';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  routeDashboard: string[];
  routeAdd: string[];
  routeDelete: string[];

  // Data
  calendarToDo: IItems[];

  constructor(private readonly toDoList$: ToDoListService) {
    this.routeDashboard = ['../']; //le envio el id
    this.routeAdd = ['add'];
    this.routeDelete = ['delete', 'id'];

    //inicializa variables data
    this.calendarToDo = new Array<IItems>();
  }
  ngOnInit(): void {
    this.toDoList$.getAll().subscribe({
      next: data => (this.calendarToDo = data),
      error: err => console.log(err),
    });
  }

  // editIsCompleted(id: string): void {
  //   this.toDoList$.
  // }
}
