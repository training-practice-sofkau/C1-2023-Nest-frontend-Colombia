import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashoardRoutingModule } from './dashoard-routing.module';
import { HomeeComponent } from './pages/homee/homee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { TransfersComponent } from './pages/transfers/transfers.component';
import { NarbarComponent } from './components/narbar/narbar.component';
import { HomComponent } from './pages/hom/hom.component';
import { CreateAccountsComponent } from './components/create-accounts/create-accounts.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    HomeeComponent,
    SidebarComponent,
    AccountsComponent,
    CustomersComponent,
    TransfersComponent,
    NarbarComponent,
    HomComponent,
    CreateAccountsComponent,
    HistoryComponent,
  ],
  imports: [CommonModule, DashoardRoutingModule],
})
export class DashoardModule {}
