// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { DetalleToDoListComponent } from './pages/detalle-to-do-list/detalle-to-do-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/to-do-list
    component: DashboardComponent,
  },
  {
    path: 'detalle', // localhost:4200/to-do-list/detalle
    component: DetalleToDoListComponent,
  },
  // {
  //   path: 'experiencia-laboral', // localhost:4200/to-do-list/experiencia-laboral
  //   // component: ExperienciaLaboralComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListRoutingModule {}
