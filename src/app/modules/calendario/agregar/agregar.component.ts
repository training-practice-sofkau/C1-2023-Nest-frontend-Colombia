import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      'title':new FormControl('',[
        Validators.minLength(3),
        Validators.required
      ]),
      'description':new FormControl(''),
      'responsible':new FormControl(''),
      'isComplete':new FormControl(0),
      'estate':new FormControl(1),
      'dia': new FormControl(0,[
        Validators.min(1),
        Validators.max(28),
        Validators.required
      ]),
      'mes': new FormControl(2,[
        Validators.min(2),
        Validators.required,
        Validators.max(2)
        ]),
      'anio': new FormControl(2023,[
        Validators.min(2023),
        Validators.required,
        Validators.max(2023)
        ]),
      'idUser': new FormControl(localStorage.getItem('uid'))
    })
  }

  addItemRequired(){
    this.todoitemService.addItem(this.formularioAgg.getRawValue())
        .subscribe({
        next:(Item) =>{
          console.log(Item);
          this.router.navigate(['../']);
        }
      }
    )
  }

}
