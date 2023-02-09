import { Component } from '@angular/core';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  days: string[];
  toDoList: string[];
  routeDetalle: string[];
  routeDashboard: string[];

  constructor() {
    this.days = ['1', '2', '3', '4'];
    this.toDoList = ['A'];
    this.routeDetalle = ['detalle'];
    this.routeDashboard = ['../'];
  }
}
