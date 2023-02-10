/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  routeNewItem: string[];
  todoList: TodoListI[];

  constructor() {
    this.routeNewItem = ['new-item'];
    this.todoList =[
      {
        Id: 1,
        Title: 'Estudiar Angular',
        Description: 'Estudiar Angular',
        Responsible: 'Juan',
        IsCompleted: false,
        State: true,
      },
      {
        Id: 2,
        Title: 'Estudiar React',
        Description: 'Estudiar React',
        Responsible: 'Juan',
        IsCompleted: false,
        State: true,
      },
      {
        Id: 3,
        Title: 'Estudiar Vue',
        Description: 'Estudiar Vue',
        Responsible: 'Juan',
        IsCompleted: false,
        State: true,
      },
    ];
  }

  getTodoList(): void {
    this.todoList;
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.getTodoList();
  }

}
