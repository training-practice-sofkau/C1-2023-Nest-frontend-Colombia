import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sofka-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component {
  @Output()
  changeEstado: EventEmitter<boolean>;

  constructor() {
    this.changeEstado = new EventEmitter<boolean>();
  }

  cambiarEstadoC2(estado: boolean): void {
    console.log('cambiarEstadoC2', estado);
    this.changeEstado.emit(estado);
  }
}
