import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { AppComponent } from './pages/app/app.component';
import { Componente1Component } from './pages/componente1/componente1.component';
import { IndexComponent } from './pages/index/index.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';
import { Componente4Component } from './components/componente4/componente4.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MyPipePipe,
    ListUsersComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
