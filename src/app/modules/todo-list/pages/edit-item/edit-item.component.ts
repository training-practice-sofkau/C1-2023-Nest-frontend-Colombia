/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { TodoListI } from '../../interfaces/todo-list.interface';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sofka-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit{

  form: FormGroup

  routePrincipal: string[];

  item: TodoListI;

  id: string | null | undefined;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private todoListService: TodoListService)
  {

    this.routePrincipal = ['../../'];

    this.item = {
      id: '',
      title: '',
      description: '',
      responsible: '',
      isCompleted: 0,
      state: 0,
    };

    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      responsible: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });




  }
  sendItem(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService.editItemById(this.id, this.form.getRawValue()).subscribe({
      next: (data) =>  console.log(data),
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService.getItemById(this.id).subscribe({
      next: (data) =>  this.item = data,
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
  }

  return(): void {
    this.router.navigate(['principal']);
  }

}
