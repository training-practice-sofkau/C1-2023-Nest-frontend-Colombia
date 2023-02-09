import { Component } from '@angular/core';

@Component({
  selector: 'sofka-editar-to-do-list',
  templateUrl: './editar-to-do-list.component.html',
  styleUrls: ['./editar-to-do-list.component.scss'],
})
export class EditarToDoListComponent {
  routeDashboard: string[];
  constructor() {
    this.routeDashboard = ['../../'];
  }
}
