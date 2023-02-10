import { Component } from '@angular/core';

@Component({
  selector: 'sofka-get-task-by-id',
  templateUrl: './get-task-by-id.component.html',
  styleUrls: ['./get-task-by-id.component.scss']
})
export class GetTaskByIdComponent {


  routergoBackMenu: string[];
  routeShowTask = [];



  constructor() {


    this.routergoBackMenu = ['../'];
    this.routeShowTask = [];


  }
}
