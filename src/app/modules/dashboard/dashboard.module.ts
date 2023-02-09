import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerModule } from '../customer/customer.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, CustomerModule],
  exports: [NavbarComponent]
})

export class DashboardModule { }