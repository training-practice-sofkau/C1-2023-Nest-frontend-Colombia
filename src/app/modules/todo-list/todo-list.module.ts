import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';
import { DeleteTodolistComponent } from './delete-todolist/delete-todolist.component';
import { ModifyTodolistComponent } from './modify-todolist/modify-todolist.component';
import { DetailTodolistComponent } from './detail-todolist/detail-todolist.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TodolistLayoutComponent } from './layout/todolist-layout/todolist-layout.component';
import { TodoListRoutingModule } from './todo-list-routing';



@NgModule({
  declarations: [
    ListaComponent,
    AddTodolistComponent,
    DeleteTodolistComponent,
    ModifyTodolistComponent,
    DetailTodolistComponent,
    FooterComponent,
    HeaderComponent,
    TodolistLayoutComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }
