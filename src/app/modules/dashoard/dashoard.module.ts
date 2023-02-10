import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardRoutingModule } from './dashoard-routing.module';
import { HomeeComponent } from './pages/homee/homee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountsComponent } from './components/accounts/accounts.component';

@NgModule({
  declarations: [HomeeComponent, SidebarComponent, AccountsComponent],
  imports: [CommonModule, DashoardRoutingModule],
})
export class DashoardModule {}
