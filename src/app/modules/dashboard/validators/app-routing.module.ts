import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../componentes/dashboard/dashboard.component';
import { HeroesComponent } from '../componentes/heroes/heroes.component';
import { HeroDetailComponent } from '../componentes/hero-detail/hero-detail.component';
import { IndexComponent } from '../pages/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'index', component: IndexComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}