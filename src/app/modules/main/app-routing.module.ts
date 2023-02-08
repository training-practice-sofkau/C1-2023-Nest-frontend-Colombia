import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent, DashboardComponent, HeroDetailComponent } from './components';
import { PruebaPipeComponent } from './components/prueba-pipe/prueba-pipe.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: "prueba-pipe", component: PruebaPipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
