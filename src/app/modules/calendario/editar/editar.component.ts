import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../interface/item';
import { TodoitemService } from '../service/todoitem.service';

@Component({
  selector: 'sofka-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  lista: string[];
  itemDetalles2:FormGroup;
  itemDetalles: Item ={
    id:"",
    title:"",
    description:"",
    responsible:"",
    isComplete:0,
    estate:0,
    dia: 0,
    mes: 0,
    anio: 0

  }

  constructor(private route:ActivatedRoute, private itemService: TodoitemService, private router: Router){
    this.lista = ["../"]
    this.itemDetalles2 = new FormGroup({
      'id':new FormControl(''),
      'title':new FormControl(''),
      'description':new FormControl(''),
      'responsible':new FormControl(''),
      'isComplete':new FormControl(0),
      'estate':new FormControl(1),
      'dia': new FormControl(0),
      'mes': new FormControl(0),
      'anio': new FormControl(0)
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.itemService.getItem(id).subscribe({
            next:(response) => {
              this.itemDetalles2.setValue({
                id:response.id,
                title:response.title,
                description:response.description,
                responsible:response.responsible,
                isComplete:response.isComplete,
                estate:response.estate,
                dia:response.dia,
                mes:response.mes,
                anio:response.anio
              })
            }
          })
        }
      }
    })
  }

  updateItem(){
    console.log(this.itemDetalles2.getRawValue());
    this.itemService.updateItem(this.itemDetalles2.get('id')?.value,this.itemDetalles2.getRawValue())
    .subscribe({
      next:(response)=>{
        this.router.navigate(['items']);
      }
    });
  }
}
