import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddItemModel } from '../models/addItem.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.scss']
})
export class AddTodolistComponent {
  lista: string[];

  frmFormulario: FormGroup;

  constructor(private readonly todoListService: TodoListService, private router: Router){
    this.lista = ["../"]

    //this.uidUser = localStorage.getItem('uid') ?? '';

    this.frmFormulario = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', Validators.required),
      responsible: new FormControl('', Validators.required),
      numberDay: new FormControl(1, [Validators.required,Validators.min(1), Validators.max(28)]),
      nameCalendar: new FormControl('', Validators.required),
      uidUser: new FormControl(localStorage.getItem('uid')),
    });

  }

  saveTodoList(): void{

    console.log('sendData', this.frmFormulario);
    console.log(this.frmFormulario.getRawValue());

    this.todoListService.saveTodoList(this.frmFormulario.getRawValue()).subscribe({
      next: data => console.log(data),
      error: err => console.error(err),
      complete: () => console.info('complete')
    })
    this.frmFormulario.reset();
  }
}
