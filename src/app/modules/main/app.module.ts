import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages';
import { CustomerModule } from '../customer/customer.module';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
registerLocaleData(localeEsCo, 'es-Co');

@NgModule({
  declarations: [AppComponent, IndexComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Co' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  imports: [
    CustomerModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class AppModule { }
