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
      {
        path: 'traer',
        component: TraerTareasComponent,
      },
      {
        path: 'agregar',
        component: CrearTareasComponent,
      },
      {
        path: 'editar',
        component: ActualizarTareasComponent,
      },
      {
        path: 'eliminar',
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
