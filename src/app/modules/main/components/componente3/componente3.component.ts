import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sofka-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.scss']
})
export class Componente3Component {
  estado: boolean;

  @Output()
  changeEstado: EventEmitter<boolean>;

  constructor() {
    this.estado = false;
    this.changeEstado = new EventEmitter<boolean>();
  }

  cambiarEstado(): void {
    this.estado = !this.estado;
    this.changeEstado.emit(this.estado);
  }
}
