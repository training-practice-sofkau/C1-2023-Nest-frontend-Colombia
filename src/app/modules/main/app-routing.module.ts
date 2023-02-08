import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../heroes/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../heroes/components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes/heroes.component';

//import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
//import { HeroesComponent } from './modules/pages/heroes/heroes.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
