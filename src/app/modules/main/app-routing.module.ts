import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponenteEjemploComponent } from '../../shared/components/componente-ejemplo/componente-ejemplo.component';
import { ListarComponent } from '../calendario/listar/listar.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'items',
    loadChildren: () =>
      import('../calendario/calendario.module').then(
        module => module.CalendarioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
