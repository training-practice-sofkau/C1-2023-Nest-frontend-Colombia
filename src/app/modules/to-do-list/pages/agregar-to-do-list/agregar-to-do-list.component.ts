import { Component } from '@angular/core';

@Component({
  selector: 'sofka-agregar-to-do-list',
  templateUrl: './agregar-to-do-list.component.html',
  styleUrls: ['./agregar-to-do-list.component.scss'],
})
export class AgregarToDoListComponent {
  routeDashboard: string[];
  constructor() {
    this.routeDashboard = ['../'];
  }
}
