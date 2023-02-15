import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-modify-todolist',
  templateUrl: './modify-todolist.component.html',
  styleUrls: ['./modify-todolist.component.scss']
})
export class ModifyTodolistComponent implements OnInit{

  lista: string[];

  frmFormularioModify : FormGroup;

  constructor(private readonly todoListService: TodoListService, private route:ActivatedRoute){
    this.lista = ["../../"]

    this.frmFormularioModify = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(null, Validators.required),
      responsible: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id = params.get('id');

        if(id){
          this.todoListService.getTodoListId(id).subscribe({
            next:(response) =>{
              this.frmFormularioModify.setValue({
                id: response.id,
                title: response.title,
                description: response.description,
                responsible: response.responsible
              })
            }
          })
        }
      }
    })
  }

  modifyTodoItem(){
    console.log(this.frmFormularioModify.getRawValue());
    this.todoListService.modifyTodoList(this.frmFormularioModify.get('id')?.value, this.frmFormularioModify.getRawValue()).subscribe({
      next: data => ( console.log(data)),
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    });
  }

}
