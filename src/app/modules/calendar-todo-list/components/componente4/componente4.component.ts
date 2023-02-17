import { Component } from '@angular/core';
import { StateService } from '../../services/states/state.service';

@Component({
  selector: 'sofka-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.scss']
})
export class Componente4Component  {

  estado: boolean;
  constructor(private readonly state$: StateService) {

    this.estado = this.state$.state;


  }



  cambiarEstado():void{

    this.estado =!this.state$.state;
    this.state$.state = this.estado;

  }



}
