import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../interface/item';
import { TodoitemService } from '../service/todoitem.service';

@Component({
  selector: 'sofka-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  lista: string[];

  formularioAgg:FormGroup;

  constructor(private todoitemService: TodoitemService, private router: Router){
    this.lista = ["../"],
    this.formularioAgg = new FormGroup({
      'title':new FormControl(''),
      'description':new FormControl(''),
      'responsible':new FormControl(''),
      'isComplete':new FormControl(0),
      'estate':new FormControl(1),
      'dia': new FormControl(0),
      'mes': new FormControl(0),
      'anio': new FormControl(0),
      'idUser': new FormControl(localStorage.getItem('uid'))
    })
  }

  addItemRequired(){
    this.todoitemService.addItem(this.formularioAgg.getRawValue()).subscribe({
        next:(Item) =>{
          console.log(Item);
          this.router.navigate(['items']);
        }
      }
    )
  }

}
