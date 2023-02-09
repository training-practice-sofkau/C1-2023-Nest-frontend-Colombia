import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'hoja-de-vida', // localhost:4200/hoja-de-vida
    loadChildren: () =>
      import('../hoja-de-vida/hoja-de-vida.module').then(
        (m) => m.HojaDeVidaModule
      ),
  },
  {
    path: 'tareas', // localhost:4200/hoja-de-vida
    loadChildren: () =>
      import('../tareas/tareas.module').then(
        (m) => m.TareasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
