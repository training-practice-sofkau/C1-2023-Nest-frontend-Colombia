import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../interface/item';
import { TodoitemService } from '../service/todoitem.service';

@Component({
  selector: 'sofka-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  lista: string[];

  itemDetalles: Item ={

    title:"",
    description:"",
    responsible:"",
    isComplete:0,
    estate:0,
    dia: 0,
    mes: 0,
    anio: 0

  }

  constructor(private route:ActivatedRoute, private itemService: TodoitemService){
    this.lista = ["../"]

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.itemService.getItem(id).subscribe({
            next:(response) => {
              this.itemDetalles = response
            }
          })
        }
      }
    })
  }


}
