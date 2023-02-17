import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/states/state.service';

@Component({
  selector: 'sofka-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {


  constructor(private readonly state$: StateService) {}
  ngOnInit(): void {


    this.state$.changeState.subscribe({

      next: (state: boolean) => (console.log('component1',state)),

      error: (error: Error) => {
        console.log(error);
      }

    })



  }


  cambiarEstadoC1(estado: boolean):void{

    console.log('CambiarEstadoC1',estado);

  }




}
