// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { ToDoListLayoutComponent } from './layouts/to-do-list-layout/to-do-list-layout.component';

// Pages
import { DetalleToDoListComponent } from './pages/detalle-to-do-list/detalle-to-do-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AgregarToDoListComponent } from './pages/agregar-to-do-list/agregar-to-do-list.component';
import { EditarToDoListComponent } from './pages/editar-to-do-list/editar-to-do-list.component';
import { EliminarToDoListComponent } from './pages/eliminar-to-do-list/eliminar-to-do-list.component';
import { ListadoToDoListComponent } from './pages/listado-to-do-list/listado-to-do-list.component';

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
        path: 'detail/:id', // localhost:4200/to-do-list/dashboard/detalle/x
        component: DetalleToDoListComponent,
      },
      {
        path: 'add', // localhost:4200/to-do-list/dashboard/agregar
        component: AgregarToDoListComponent,
      },
      {
        path: 'edit/:id', // localhost:4200/to-do-list/dashboard/editar
        component: EditarToDoListComponent,
      },
      {
        path: 'delete/:id', // localhost:4200/to-do-list/dashboard/eliminar
        component: EliminarToDoListComponent,
      },
      {
        path: 'list', // localhost:4200/to-do-list/dashboard/listar
        component: ListadoToDoListComponent,
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
