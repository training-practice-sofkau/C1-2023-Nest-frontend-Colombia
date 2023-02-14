import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraerTareasComponent } from '../tareas/pages/traerTareas/traerTareas.component';

import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'tareas', //https://localhost:7281/api/ToDo
    loadChildren: () =>
      import('../tareas/tareas.module').then(
        module => module.TareasModule
      ),

  },

];


  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //   // component: NotFoundErrorComponent,
  // },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
