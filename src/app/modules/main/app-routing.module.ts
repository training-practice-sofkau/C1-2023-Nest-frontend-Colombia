import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'account',
    loadChildren: () => import('../account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'movements',
    loadChildren: () => import('../movements/movements.module').then(m => m.MovementsModule),
  },
  {
    path: 'security',
    loadChildren: () => import('../security/security.module').then(m => m.SecurityModule),
  },
  {
    path: 'transfer',
    loadChildren: () => import('../transfer/transfer.module').then(m => m.TransferModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
