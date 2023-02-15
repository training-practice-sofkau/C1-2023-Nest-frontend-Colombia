import { DatosUsuarioComponent } from './../../banco/pages/datos-usuario/datos-usuario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { LogComponent } from '../../banco/pages/log/log.component';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['banco/usuario']);
// const redirectLoggedInToDashboard = () => redirectLoggedInTo(['banco/registro']);
const routes: Routes = [
  // {
  //   path: 'banco/usuario',
  //   component: DatosUsuarioComponent,
  //   canActivate: [AngularFireAuthGuard],
  //   data: { authGuardPipe: redirectLoggedInToDashboard }
  // },
  // {
  //   path: 'banco/registro',
  //   component:  LogComponent,
  //   canActivate: [AngularFireAuthGuard],
  //   data: { authGuardPipe: redirectUnauthorizedToLogin }
  // },

   { path: 'banco',
    loadChildren: () => import('src/app/modules/banco/banco.module').then(m => m.BancoModule)  //localhost:4200/banco

  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
