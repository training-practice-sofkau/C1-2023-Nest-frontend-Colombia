import { Component } from '@angular/core';
import { StateService } from '../../calendar-todo-list/services/states/state.service';

@Component({
  selector: 'sofka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  routerTask: string[];
  estado: boolean;
  constructor(private readonly state$: StateService){

    this.estado = this.state$.state;
    this.routerTask = ['calendar-todo-list/login'];


  }

  cambiarEstado():void{

    this.estado =!this.state$.state;
    this.state$.state = this.estado;

  }

}
