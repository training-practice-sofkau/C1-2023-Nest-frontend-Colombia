import { Component } from '@angular/core';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  routerGetAllTask: string[];
  routerGetTaskById: string[];
  routerPostTask: string[];
  routerPuTaskComplete: string[];
  routerPutTask: string[];
  routerDeleteTask: string[];


  constructor() {


    this.routerGetAllTask = ['get-task'];
    this.routerGetTaskById = ['get-task-by-id'];
    this.routerPostTask = ['post-task'];
    this.routerPuTaskComplete = ['put-task-complete'];
    this.routerPutTask = ['put-task'];
    this.routerDeleteTask = ['delete-task'];



  }


}
