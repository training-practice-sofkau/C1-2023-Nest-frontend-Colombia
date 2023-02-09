// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '', loadChildren: () => import('../customer/customer.module')
          .then(m => m.CustomerModule)
      },
      {
        path: 'deposits', loadChildren: () => import('../deposits/deposits.module')
          .then(m => m.DepositsModule)
      },
      {
        path: 'transfers', loadChildren: () => import('../transfers/transfers.module')
          .then(m => m.TransfersModule)
      },
      {
        path: 'accounts', loadChildren: () => import('../account/account.module')
          .then(m => m.AccountsModule)
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
