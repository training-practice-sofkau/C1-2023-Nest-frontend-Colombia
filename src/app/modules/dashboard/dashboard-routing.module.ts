import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      // {
      //   path: '', component: CustomerDetailComponent
      // },
      {
        path: '', loadChildren: () => import('../customer/customer.module')
        .then(m => m.CustomerModule)
      },
      {
        path: 'deposits', loadChildren: () => import('../deposits/deposits.module')
        .then(m => m.DepositsModule)
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
