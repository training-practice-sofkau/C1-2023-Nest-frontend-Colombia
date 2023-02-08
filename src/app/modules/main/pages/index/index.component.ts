import { Component } from '@angular/core';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  fecha: Date;
  precio: number;
  nombre: string;

  constructor() {
    this.fecha = new Date();
    this.precio = 123123123;
    this.nombre = 'Julian Lasso';
  }
}
