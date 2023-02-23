import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    //carga perezosa del auth m=modulo
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
   // canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    //carga perezosa del main
    path: 'dashboard',
    loadChildren: () =>
      import('../dashoard/dashoard.module').then(m => m.DashoardModule),
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    //DESPUES DEL LOCALHOST ME REDIRIGE A LA PAGINA DESEADA ** EN ESTE CASO MODULE AUTH
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
