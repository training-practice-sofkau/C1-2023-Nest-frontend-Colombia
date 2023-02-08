import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
import { HeroesComponent } from './main/components/heroes/heroes.component';
import { HeroDetailComponent } from './main/components/hero-detail/hero-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'heroes', component: HeroesComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  {
    path: 'authentication',
    loadChildren: () => 
    import('../modules/authentication/authentication.module').then(
      m => m.AuthenticationModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
