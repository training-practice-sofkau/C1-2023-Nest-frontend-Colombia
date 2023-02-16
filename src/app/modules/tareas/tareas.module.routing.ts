import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { ActualizarTareasComponent } from './pages/actualizarTareas/actualizarTareas.component';
import { CrearTareasComponent } from './pages/crearTareas/crearTareas.component';
import { EliminarTareasComponent } from './pages/eliminarTareas/eliminarTareas.component';
import { TraerTareasComponent } from './pages/traerTareas/traerTareas.component';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
     /*  {
        path: 'login', //http://localhost:4200/login
        component: LoginComponent,
      },
      {
        path: 'dashboard', //http://localhost:4200/dashboard
        component: DashboardComponent,
      }, */
      {
        path: 'traer', //http://localhost:4200/tareas/traer
        component: TraerTareasComponent,
      },
      {
        path: 'crear',//http://localhost:4200/tareas/crear
        component: CrearTareasComponent,
      },
      {
        path: 'editar',//http://localhost:4200/tareas/editar
        component: ActualizarTareasComponent,
      },
      {
        path: 'eliminar',//http://localhost:4200/tareas/eliminar
        component: EliminarTareasComponent
      },

    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaRoutingModule {}
