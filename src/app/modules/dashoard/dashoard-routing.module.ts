import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeeComponent } from './pages/homee/homee.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TransfersComponent } from './pages/transfers/transfers.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomComponent } from './pages/hom/hom.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { CreateAccountsComponent } from './components/create-accounts/create-accounts.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeeComponent,
    children: [
      { path: 'home', component: HomComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'transfers', component: TransfersComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'history', component: HistoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashoardRoutingModule {}
