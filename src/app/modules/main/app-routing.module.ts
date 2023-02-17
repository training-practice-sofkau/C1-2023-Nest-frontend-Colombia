import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['tareas']);


const routes: Routes = [
  /* {
    path: '',//http://localhost:4200/login
    component: LoginComponent,
  }, */
  {
    path: 'login', //http://localhost:4200/login
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
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
