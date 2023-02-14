/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { todoListModel } from '../../models/todo-list.model';
import { TodoListService } from '../../services/todo-list/todo-list.service';

@Component({
  selector: 'sofka-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {

  title: string;
  description: string;
  responsible: string;


  routePrincipal: string[];
  routeExperienciaLaboral: string[];

  constructor(private readonly todoListService: TodoListService) {
    this.title = '';
    this.description = '';
    this.responsible = '';

    this.routePrincipal = ['../'];
    this.routeExperienciaLaboral = ['../experiencia-laboral'];
  }

  sendItem(): void {
    const item = new todoListModel(this.title, this.description, this.responsible);
    this.todoListService.createItem(item).subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => console.log('Complete'),
    });

  }
}
