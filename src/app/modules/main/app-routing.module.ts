import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'heroes', component: HeroesComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'signIn', component: Authe },
  {
    path: '',
    loadChildren: () => 
    import('../authentication/authentication.module').then(
      m => m.AuthenticationModule
    )
  },
  {
    path: 'profile',
    loadChildren: () => 
    import('../user/user.module').then(
      m => m.UserModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
