import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-pipe',
  templateUrl: './prueba-pipe.component.html',
  styleUrls: ['./prueba-pipe.component.scss']
})
export class PruebaPipeComponent implements OnInit {

  nombreUpper: string;
  nombreLower: string
  fecha: Date | number | string;
  amount: number;
  fracction: number
  percent: number;
  jsonObject: {}
  oldFecha: string;
  phone: string;
  name:string

  constructor() {
    this.nombreUpper = "Jerson Daniel Basto Gil";
    this.nombreLower = "Jerson Daniel Basto Gil";
    this.fecha = Date.now();
    this.amount = 25000;
    this.fracction = 23.09877
    this.percent = 54.093;
    this.jsonObject = { name: "Daniel", lastName: "Basto", age: "26" }
    this.oldFecha = "20201231"
    this.phone = "3298765444"
    this.name="Jerson Daniel Basto"
  }

  ngOnInit(): void {
  }



}
