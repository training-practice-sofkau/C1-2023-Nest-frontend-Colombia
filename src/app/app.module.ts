import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DepositsComponent } from './components/deposits/deposits.component';
import { TranfersComponent } from './components/tranfers/tranfers.component';
import { AuthComponent } from './components/auth/auth.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    DepositsComponent,
    TranfersComponent,
    AuthComponent,
    CustomersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
