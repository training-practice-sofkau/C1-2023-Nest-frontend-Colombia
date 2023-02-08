import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';

import { AppRoutingModule } from './routhing/app-routhing.module';

import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dasboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent } from './components/heroe.component';
import { HeroSearchComponent } from './components/hero-search.component';
import { MessagesComponent } from './components/messages.component';
import { HeroBirthdayComponent } from './Pipes/pipeHero/pipe.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeroBirthdayComponent,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
