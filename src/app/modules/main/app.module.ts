import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages';
import { CustomerModule } from '../customer/customer.module';
registerLocaleData(localeEsCo, 'es-Co');

@NgModule({
  declarations: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Co' }],
  bootstrap: [AppComponent],
  imports: [
    CustomerModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class AppModule { }
