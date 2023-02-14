import { Component } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'sofka-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.scss']
})
export class Componente4Component {
  estado: boolean;

  constructor(private readonly stateService: StateService) {
    this.estado = this.stateService.state;
  }

  cambiarEstado(): void {
    this.stateService.state = !this.estado;
    this.estado = this.stateService.state;
  }
}
