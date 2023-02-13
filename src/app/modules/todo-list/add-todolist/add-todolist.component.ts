import { Component } from '@angular/core';
import { AddItemModel } from '../models/addItem.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.scss']
})
export class AddTodolistComponent {
  lista: string[];

  title: string;
  description: string;
  responsible: string;
  numberDay: number;
  nameCalendar: string;

  constructor(private readonly todoListService: TodoListService){
    this.lista = ["../"]

    this.title = '';
    this.description = '';
    this.responsible = '';
    this.numberDay = 0;
    this.nameCalendar = '';

  }

  saveTodoList(): void{

    const item = new AddItemModel(this.title, this.description, this.responsible, this.numberDay, this.nameCalendar);

    console.log(item);

    this.todoListService.saveTodoList(item).subscribe({
      next: data => console.log(data),
      error: err => console.error(err),
      complete: () => console.info('complete')
    })
  }

}
