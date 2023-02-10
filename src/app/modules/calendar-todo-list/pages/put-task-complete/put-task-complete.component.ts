import { Component } from '@angular/core';

@Component({
  selector: 'sofka-put-task-complete',
  templateUrl: './put-task-complete.component.html',
  styleUrls: ['./put-task-complete.component.scss']
})
export class PutTaskCompleteComponent {

  routergoBackMenu: string[];
  routeShowTask = [];



  constructor() {


    this.routergoBackMenu = ['../'];
    this.routeShowTask = [];


  }

}
