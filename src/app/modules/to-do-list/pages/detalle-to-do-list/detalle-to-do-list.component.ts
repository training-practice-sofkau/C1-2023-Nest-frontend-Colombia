import { Component } from '@angular/core';

@Component({
  selector: 'sofka-detalle-to-do-list',
  templateUrl: './detalle-to-do-list.component.html',
  styleUrls: ['./detalle-to-do-list.component.scss'],
})
export class DetalleToDoListComponent {
  routeDashboard: string[];
  constructor() {
    this.routeDashboard = ['../../'];
  }
}
