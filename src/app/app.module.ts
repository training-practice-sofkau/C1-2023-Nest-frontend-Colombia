import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './modules';
import { DepositsComponent } from './modules';
import { TranfersComponent } from './modules';
import { AuthComponent } from './modules';
import { CustomersComponent } from './modules';
import { DashboardComponent } from './modules';
import { RelativeTimePipe } from './shared/pipes/relative-time.pipe';
import { CustomerDetailComponent } from './shared/pages/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    DepositsComponent,
    TranfersComponent,
    AuthComponent,
    CustomersComponent,
    DashboardComponent,
    RelativeTimePipe,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
