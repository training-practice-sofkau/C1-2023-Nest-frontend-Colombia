/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { AuthService } from '../../../main/services/auth/auth.service';

import { LocalStorageService } from 'ngx-webstorage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  routeNewItem: string[];
  todoList: TodoListI[];
  uid: string | null;

  constructor(
    private readonly todoListService: TodoListService,
    private readonly authService: AuthService,
    private readonly localStorage: LocalStorageService,
    private readonly afAuth: AngularFireAuth
    ) {
    this.routeNewItem = ['new-item'];
    this.todoList = new Array<TodoListI>();
    this.uid = '';
  }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.uid = localStorage.getItem('uid');
    console.log(this.uid);

    this.todoListService.getItemByUId(this.uid).subscribe({
      next: (data) =>  {data.forEach((item) => this.todoList.push(item)); data.forEach((item) => console.log(item));},
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
