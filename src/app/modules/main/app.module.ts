import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/modules/heroes/services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../main/app.component';
import { HeroesComponent } from 'src/app/modules/heroes/pages/heroes.component';
import { HeroDetailComponent } from 'src/app/modules/heroes/components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from 'src/app/modules/heroes/components/hero-search/hero-search.component';
import { MessagesComponent } from 'src/app/modules/heroes/components/messages/messages.component';
import { DashboardComponent } from 'src/app/modules/heroes/components/dashboard/dashboard.component';
import { MyPipesComponent } from '../my-pipes/pages/my-pipes.component';
import { CelularPipe } from '../my-pipes/pipes/celularpipe/celular.pipe';
import { NombrePipe } from '../my-pipes/pipes/nombrepipe/nombre.pipe';
import { TiempoPipe } from '../my-pipes/pipes/tiempopipe/tiempo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    MyPipesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent,
    CelularPipe,
    NombrePipe,
    TiempoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
