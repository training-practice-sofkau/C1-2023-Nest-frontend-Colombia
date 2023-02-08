import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../pages/app/app.component';
import { DashboardComponent } from '../componentes/dashboard/dashboard.component';
import { HeroDetailComponent } from '../componentes/hero-detail/hero-detail.component';
import { HeroesComponent } from '../componentes/heroes/heroes.component';
import { HeroSearchComponent } from '../componentes/hero-search/hero-search.component';
import { MessagesComponent } from '../componentes/messages/messages.component';
import { PhonePipe } from '../pipes/phone.pipe/phone.pipe';
import { SavedPipe } from '../pipes/saved.pipe/saved.pipe';
import { RelativeTimePipe } from '../pipes/relative-time.pipe/relative-time.pipe';

@NgModule({
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
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    PhonePipe,
    RelativeTimePipe,
    SavedPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }