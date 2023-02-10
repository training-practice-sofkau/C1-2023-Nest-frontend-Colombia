import { Component } from '@angular/core';

@Component({
  selector: 'sofka-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.scss']
})
export class GetTaskComponent {


  routergoBackMenu: string[];
  routeShowTask = [];



  constructor() {


    this.routergoBackMenu = ['../'];
    this.routeShowTask = [];


  }




}
