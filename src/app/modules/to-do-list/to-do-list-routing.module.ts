// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { DetalleToDoListComponent } from './pages/detalle-to-do-list/detalle-to-do-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AgregarToDoListComponent } from './pages/agregar-to-do-list/agregar-to-do-list.component';
import { ToDoListLayoutComponent } from './layouts/to-do-list-layout/to-do-list-layout.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/to-do-list/dashboard
    component: ToDoListLayoutComponent,
    children: [
      {
        path: '', // localhost:4200/to-do-list/dashboard
        component: DashboardComponent,
      },
      {
        path: 'detalle/:id', // localhost:4200/to-do-list/detalle/x
        component: DetalleToDoListComponent,
      },
      {
        path: 'agregar', // localhost:4200/to-do-list/agregar
        component: AgregarToDoListComponent,
      },
      {
        path: '**', // localhost:4200/to-do-list/dashboard
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListRoutingModule {}
