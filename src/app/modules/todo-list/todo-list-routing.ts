// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../main/pages/index/index.component';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';
import { DeleteTodolistComponent } from './delete-todolist/delete-todolist.component';
import { DetailTodolistComponent } from './detail-todolist/detail-todolist.component';
import { TodolistLayoutComponent } from './layout/todolist-layout/todolist-layout.component';
// Pages
import { ListaComponent } from './lista/lista.component';
import { ModifyTodolistComponent } from './modify-todolist/modify-todolist.component';


const routes: Routes = [
  {
    path: '', // localhost:4200/todoitems/
    component: TodolistLayoutComponent,
    children: [
      {
        path: '',
        component: ListaComponent,
      },
      {
        path: 'agregar',
        component: AddTodolistComponent
      },
      {
        path: 'editar/:id',
        component: ModifyTodolistComponent
      },
      {
        path: 'eliminar',
        component: DeleteTodolistComponent
      },
      {
        path: 'detalles/:id',
        component: DetailTodolistComponent
      }
    ],
  },
  {
    path: 'salir',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
