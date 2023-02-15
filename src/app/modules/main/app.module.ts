import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO'
import { RouterModule } from '@angular/router';

import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages';
import { CustomerModule } from '../customer/customer.module';
import { IndexComponent } from './pages/index/index.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthInterceptor } from './interceptors/auth.interceptor';
registerLocaleData(localeEsCo, 'es-Co');

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ]
})
export class AppModule { }
