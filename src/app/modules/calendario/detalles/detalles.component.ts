import { Component } from '@angular/core';

@Component({
  selector: 'sofka-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  lista: string[];

  constructor(){
    this.lista = ["../"]
  }
}
