// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistLayoutComponent } from './layout/todolist-layout/todolist-layout.component';
// Pages
import { ListaComponent } from './lista/lista.component';
import { ModifyTodolistComponent } from './modify-todolist/modify-todolist.component';


const routes: Routes = [
  {
    path: '', // localhost:4200/hoja-de-vida
    component: TodolistLayoutComponent,
    children: [
      {
        path: '',
        component: ListaComponent,
      },
      {
        path: 'editar',
        component: ModifyTodolistComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
