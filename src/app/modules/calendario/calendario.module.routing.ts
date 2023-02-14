import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LayautComponent } from './layaut/layaut.component';

const routes: Routes = [
  {
    path: '',
    component: LayautComponent,
    children: [
      {
        path: '',
        component: ListarComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        path: 'eliminar',
        component: EliminarComponent
      },
      {
        path: 'detalles/:id',
        component: DetallesComponent
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioRoutingModule {}
