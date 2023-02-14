import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'sofka-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {
  constructor(private readonly stateService: StateService) {}

  cambiarEstadoC1(estado: boolean): void {
    console.log('cambiarEstadoC1', estado);
  }

  ngOnInit(): void {
    this.stateService.changeState.subscribe({
      next: (state: boolean) => console.log('Component1', state),
      error: (err: Error) => console.log(err)
    });
  }
}
