import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO'
registerLocaleData(localeEsCo, 'es-Co');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '..';
import { AccountsComponent } from '..';
import { DepositsComponent } from '..';
import { TranfersComponent } from '..';
import { AuthComponent } from '..';
import { CustomersComponent } from '..';
import { DashboardComponent } from '..';
import { RelativeTimePipe, PhoneNumberPipe, DaysBetweenPipe } from 'src/app/shared/pipes';
import { CustomerDetailComponent } from '../../shared/pages/customer-detail/customer-detail.component';

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
    PhoneNumberPipe,
    DaysBetweenPipe,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Co' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
