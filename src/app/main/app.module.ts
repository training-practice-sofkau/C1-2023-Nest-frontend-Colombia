import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../heroes/service/In-memory-data.service';

import { AppComponent } from './componente/app.component';
import { HeroesComponent } from '../heroes/pages/heroes.component';
import { HeroDetailComponent } from '../heroes/componentes/hero-detail/hero-detail.component';
import { MessagesComponent } from '../heroes/componentes/messages/messages.component';
import { DashboardComponent } from '../heroes/componentes/dashboard/dashboard.component';
import { HeroSearchComponent } from '../heroes/componentes/hero-search/herosearch.component';


import { AppRoutingModule } from './app-routing.module'
import { HeroBirthdayComponent } from '../heroes/pipes/pipe/pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroBirthdayComponent

   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
