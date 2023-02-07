import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListadoComponent } from '../heroes/components/heroes-listado/heroes-listado.component';

const routes: Routes = [
  {path: 'listar', component: HeroesListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
