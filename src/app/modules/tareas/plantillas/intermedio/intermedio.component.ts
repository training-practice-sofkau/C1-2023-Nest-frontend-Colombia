import { Component } from '@angular/core';

@Component({
  selector: 'app-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.css']
})
export class IntermedioComponent {
  routeCrear: string[];
  routeMain: string[];

  constructor(){
    this.routeCrear = ['./crear']
    this.routeMain = ['./main']
  }

 }
