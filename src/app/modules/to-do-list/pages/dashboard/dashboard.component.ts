import { Component } from '@angular/core';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  routeDetalle: string[];

  constructor() {
    this.routeDetalle = ['detalle'];
  }
}
