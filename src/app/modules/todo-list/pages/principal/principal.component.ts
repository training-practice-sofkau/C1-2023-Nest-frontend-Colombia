/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { AuthService } from '../../../main/services/auth/auth.service';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  routeNewItem: string[];
  todoList: TodoListI[];

  constructor(private readonly todoListService: TodoListService, private readonly authService: AuthService) {
    this.routeNewItem = ['new-item'];
    this.todoList = new Array<TodoListI>();
  }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.todoListService.getItems().subscribe({
      next: (data) =>  {data.forEach((item) => this.todoList.push(item))},
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
  }

  myFc(item: TodoListI): void {
    console.log(item);
  }

  logout(): void {
    this.authService.SignOut();
  }


}
