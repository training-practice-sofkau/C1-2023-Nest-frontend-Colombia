import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponenteEjemploComponent } from '../../shared/components/componente-ejemplo/componente-ejemplo.component';
import { Componente1Component } from './pages/componente1/componente1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IndexComponent } from './pages/index/index.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'list-users',
    component: ListUsersComponent
  },
  {
    path: 'componente1',
    component: Componente1Component
  },
  {
    path: 'ejemplo/:id', // localhost:4200/ejemplo/hola
    component: ComponenteEjemploComponent
  },
  {
    path: 'hoja-de-vida', // localhost:4200/hoja-de-vida
    loadChildren: () =>
      import('../hoja-de-vida/hoja-de-vida.module').then(
        module => module.HojaDeVidaModule
      )
  }
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //   // component: NotFoundErrorComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
