import { Component } from '@angular/core';
import { StateService } from '../../services/states/state.service';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent  {

  routerGetAllTask: string[];
  routerGetTaskById: string[];
  routerPostTask: string[];
  routerPuTaskComplete: string[];
  routerPutTask: string[];
  routerDeleteTask: string[];
  routerdashboard: string[];

  estado: boolean;

  constructor(private readonly state$: StateService) {


    this.routerGetAllTask = ['get-task'];
    this.routerGetTaskById = ['get-task-by-id'];
    this.routerPostTask = ['post-task'];
    this.routerPuTaskComplete = ['put-task-complete'];
    this.routerPutTask = ['put-task'];
    this.routerDeleteTask = ['delete-task'];
    this.routerdashboard = ['../dashboard'];



    this.estado = this.state$.state;


  }

  cambiarEstado():void{

    this.estado =!this.state$.state;
    this.state$.state = this.estado;

  }


}
