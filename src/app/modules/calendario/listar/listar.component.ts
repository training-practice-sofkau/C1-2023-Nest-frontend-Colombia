import { Component, OnInit } from '@angular/core';
import {Item} from "../interface/item";


@Component({
  selector: 'sofka-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  items: Item[] = [
 {  id: 1,
    title: "Actividad 1",
    description: "Solo listar y guardar",
    responsible: "Jesús David Polo",
    isComplete: false,
    estate: 0,
    dia: 1,
    mes: 2,
    anio: 2023
  },
  { id: 2,
    title: "Actividad 2",
    description: "Solo listar y guardar",
    responsible: "Jesús David Polo",
    isComplete: false,
    estate: 0,
    dia: 1,
    mes: 2,
    anio: 2023
  },
  { id: 3,
    title: "Actividad 3",
    description: "Solo listar y guardar",
     responsible: "Jesús David Polo",
     isComplete: false,
     estate: 0,
     dia: 1,
     mes: 2,
     anio: 2023
    }

  ];


  agregar: string[];
  editar: string[];
  eliminar: string[];
  detalles: string[];
  constructor(){
    this.editar = ["editar"];
    this.agregar = ["agregar"];
    this.eliminar = ["eliminar"];
    this.detalles = ["detalles"];
  }

  ngOnInit(): void {

  }

}
