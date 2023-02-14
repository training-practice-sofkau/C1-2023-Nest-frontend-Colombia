import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

    this.frmFormulario = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      responsible: new FormControl(''),
      numberDay: new FormControl(0),
      nameCalendar: new FormControl(''),
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
