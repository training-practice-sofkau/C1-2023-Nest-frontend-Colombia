import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../../../environments/environment';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { AppComponent } from './pages/app/app.component';
import { Componente1Component } from './pages/componente1/componente1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IndexComponent } from './pages/index/index.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MyPipePipe,
    ListUsersComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
