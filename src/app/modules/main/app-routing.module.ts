import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToTareas = () => redirectLoggedInTo(['tareas']);

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'seguridad', // localhost:4200/tareas
    loadChildren: () =>
      import('../seguridad/seguridad.module').then(
        (m) => m.SeguridadModule
      ),
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectLoggedInToTareas}
  },
  {
    path: 'tareas', // localhost:4200/tareas
    loadChildren: () =>
      import('../tareas/tareas.module').then(
        (m) => m.TareasModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
