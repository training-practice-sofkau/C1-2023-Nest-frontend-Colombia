import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { SharedGuard } from './guards/shared.guard';

const routes: Routes = [
  { path: 'index', component: IndexComponent, canActivate: [SharedGuard],
  canLoad: [SharedGuard], },
  {
    path: 'shared', loadChildren: () => import('../auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
