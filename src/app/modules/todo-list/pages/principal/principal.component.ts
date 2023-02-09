import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  routeNewItem: string[];
  todoList: TodoListI[] = [];

  constructor() {
    //por implementar
    this.routeNewItem = ['new-item'];
  }

  getTodoList(): void {
    this.todoList = [
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

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.getTodoList();
  }

  editItem(item: number): void {
    console.log('editItem', item);
  }
}
