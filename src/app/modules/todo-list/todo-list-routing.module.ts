// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { NewItemComponent } from './pages/new-item/new-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { DeleteItemComponent } from './pages/delete-item/delete-item.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/todo-list
    component: PrincipalComponent,
    pathMatch: 'full',
  },
  {
    path: 'new-item', // localhost:4200/todo-list/estudios
    component: NewItemComponent,
  },
  {
    path: 'edit-item/:id', // localhost:4200/todo-list/edit-item/1
    component: EditItemComponent,
  },
  {
    path: 'view-item/:id', // localhost:4200/todo-list/view-item/1
    component: ViewItemComponent,
  },
  {
    path: 'delete-item/:id', // localhost:4200/todo-list/delete-item/1
    component: DeleteItemComponent,
  },
  {
    path: 'experiencia-laboral', // localhost:4200/todo-list/experiencia-laboral
    component: ExperienciaLaboralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListRoutingModule {}
