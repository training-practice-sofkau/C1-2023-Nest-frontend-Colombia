import { Component } from '@angular/core';

@Component({
  selector: 'sofka-eliminar-to-do-list',
  templateUrl: './eliminar-to-do-list.component.html',
  styleUrls: ['./eliminar-to-do-list.component.scss'],
})
export class EliminarToDoListComponent {
  routeDashboard: string[];
  constructor() {
    this.routeDashboard = ['../../'];
  }
}
