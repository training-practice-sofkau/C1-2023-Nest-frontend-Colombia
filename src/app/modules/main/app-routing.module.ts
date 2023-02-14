import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
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
