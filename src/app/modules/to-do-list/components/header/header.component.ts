import { Component } from '@angular/core';

@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routeDashboard: string[];
  routeAdd: string[];
  constructor() {
    this.routeDashboard = ['../dashboard'];
    this.routeAdd = ['add'];
  }
}
