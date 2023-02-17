import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from "../interface/item";
import { TodoitemService } from '../service/todoitem.service';


@Component({
  selector: 'sofka-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  items: Item[] = [];


  agregar: string[];
  editar: string[];
  eliminar: string[];
  detalles: string[];
  constructor(private router: Router,private todoitemservice: TodoitemService){
    this.editar = ["editar"];
    this.agregar = ["agregar"];
    this.eliminar = ["eliminar"];
    this.detalles = ["detalles"];
  }

  ngOnInit(): void {
    this.todoitemservice.getAllItems().subscribe({
      next:(items) => {
      this.items = items
      },
      error:(response) => {
        console.log(response)
      }
    })
  }

  completarItem(id:string|undefined, isComplete:number){
    this.todoitemservice.completarItem(id, isComplete)
    .subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

}
