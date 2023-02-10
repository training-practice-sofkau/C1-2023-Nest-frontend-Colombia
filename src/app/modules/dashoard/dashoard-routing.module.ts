import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeeComponent } from './pages/homee/homee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeeComponent,
    children: [
      { path: 'siderbar', component: SidebarComponent },
      { path: 'accounts', component: AccountsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashoardRoutingModule {}
