import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListadoComponent } from '../heroes/components/heroes-listado/heroes-listado.component';
import { DashboardComponent } from '../heroes/components/dashboard/dashboard.component';
import { HeroesDetalleComponent } from '../heroes/components/heroes-detalle/heroes-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'listar', component: HeroesListadoComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroesDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
