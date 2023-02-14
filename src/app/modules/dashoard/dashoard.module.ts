import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashoardRoutingModule } from './dashoard-routing.module';
import { HomeeComponent } from './pages/homee/homee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { TransfersComponent } from './pages/transfers/transfers.component';
import { NarbarComponent } from './components/narbar/narbar.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { HomComponent } from './pages/hom/hom.component';
@NgModule({
  declarations: [
    HomeeComponent,
    SidebarComponent,
    AccountsComponent,
    CustomersComponent,
    TransfersComponent,
    NarbarComponent,
    DepositComponent,
    HomComponent,
  ],
  imports: [CommonModule, DashoardRoutingModule],
})
export class DashoardModule {}
