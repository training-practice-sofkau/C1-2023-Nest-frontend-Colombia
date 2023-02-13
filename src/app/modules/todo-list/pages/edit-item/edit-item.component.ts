/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { todoListModel } from '../../models/todo-list.model';

@Component({
  selector: 'sofka-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {

  routePrincipal: string[];

  title: string;
  description: string;
  responsible: string;

  id: string | null | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private todoListService: TodoListService)
  {

    this.routePrincipal = ['../../'];

    this.title = '';
    this.description = '';
    this.responsible = '';

  }
  sendItem(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const item = new todoListModel(this.title, this.description, this.responsible);
    this.todoListService.editItemById(this.id, item).subscribe({
      next: (data) =>  console.log(data),
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
  }

  return(): void {
    this.router.navigate(['principal']);
  }

}
