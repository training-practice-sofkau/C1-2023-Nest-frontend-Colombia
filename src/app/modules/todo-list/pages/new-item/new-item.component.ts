/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { todoListModel } from '../../models/todo-list.model';
import { TodoListService } from '../../services/todo-list/todo-list.service';

@Component({
  selector: 'sofka-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {

  form: FormGroup;

  idUser: string | null;
  title: string;
  description: string;
  responsible: string;


  routePrincipal: string[];
  routeExperienciaLaboral: string[];

  constructor(private fb: FormBuilder, private readonly todoListService: TodoListService) {
    this.idUser = localStorage.getItem('uid');
    this.title = '';
    this.description = '';
    this.responsible = '';

    this.routePrincipal = ['../'];
    this.routeExperienciaLaboral = ['../experiencia-laboral'];

    this.form = new FormGroup({
      idUser: new FormControl(this.idUser,[Validators.required]),
      title: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      responsible: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  }



  sendItem(): void {
    //const item = new todoListModel(this.title, this.description, this.responsible);
    this.todoListService.createItem(this.form.getRawValue()).subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => console.log('Complete'),
    });

  }
}
