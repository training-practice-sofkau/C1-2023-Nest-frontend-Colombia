import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-modify-todolist',
  templateUrl: './modify-todolist.component.html',
  styleUrls: ['./modify-todolist.component.scss']
})
export class ModifyTodolistComponent {

  lista: string[];

  frmFormularioModify : FormGroup;

  constructor(private readonly todoListService: TodoListService){
    this.lista = ["../"]

    this.frmFormularioModify = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(null, Validators.required),
      responsible: new FormControl(null, Validators.required)
    });
  }

}
