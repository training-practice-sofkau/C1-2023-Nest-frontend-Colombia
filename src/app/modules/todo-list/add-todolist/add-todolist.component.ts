import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private readonly todoListService: TodoListService){
    this.lista = ["../"]

    //this.uidUser = localStorage.getItem('uid') ?? '';

    this.frmFormulario = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(null, Validators.required),
      responsible: new FormControl(null, Validators.required),
      numberDay: new FormControl(null, Validators.required),
      nameCalendar: new FormControl(null, Validators.required),
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
  }
}
