import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponenteEjemploComponent } from '../../shared/components/componente-ejemplo/componente-ejemplo.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'ejemplo/:id', // localhost:4200/ejemplo/hola
    component: ComponenteEjemploComponent,
  },
  {
    path: 'hoja-de-vida', // localhost:4200/hoja-de-vida
    loadChildren: () =>
      import('../hoja-de-vida/hoja-de-vida.module').then(
        module => module.HojaDeVidaModule
      ),
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //   // component: NotFoundErrorComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
