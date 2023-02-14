import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToAccount = () => redirectLoggedInTo(['account']);
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../account/account.module').then((m) => m.AccountModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToAccount },
  },
  {
    path: 'movements',
    loadChildren: () =>
      import('../movements/movements.module').then((m) => m.MovementsModule),
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'security',
    loadChildren: () =>
      import('../security/security.module').then((m) => m.SecurityModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInTo },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
