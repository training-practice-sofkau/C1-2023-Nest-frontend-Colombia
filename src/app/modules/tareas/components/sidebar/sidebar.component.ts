import { Component } from '@angular/core';

@Component({
  selector: 'sofka-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  routeCrear: string[];
  routeHome: string[];

  constructor(){
    this.routeCrear = ['./crear']
    this.routeHome = ['./home']
  }
}
