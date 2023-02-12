import { Component } from '@angular/core';
import { Item } from '../interface/item';

@Component({
  selector: 'sofka-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  lista: string[];

  addItem: Item={
    id: 0,
    title: '',
    description: '',
    responsible: '',
    isComplete: 0,
    estate: 1,
    dia: 0,
    mes: 0,
    anio: 0
    }
  constructor(){
    this.lista = ["../"]
  }

  addItemRequired(){
    console.log(this.addItem);
  }

}
