import { Component } from '@angular/core';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  days: string[];
  toDoList: string[];
  routeDashboard: string[];
  routeDetail: string[];
  routeAdd: string[];
  routeEdit: string[];
  routeDelete: string[];

  constructor() {
    this.days = ['1', '2', '3', '4'];
    this.toDoList = ['A', 'B'];
    this.routeDashboard = ['../'];
    this.routeDetail = ['detail', 'id']; //le envio el id
    this.routeAdd = ['add'];
    this.routeEdit = ['edit', 'id'];
    this.routeDelete = ['delete', 'id'];
  }
}
