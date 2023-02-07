import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from './modules/main/components/app.component';
import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/main/components/hero-details/hero-details.component';
import { HeroesComponent } from './modules/main/components/heroes/heroes.component';
import { InMemoryDataService } from './modules/main/services/in-memory-data.service';
import { HeroSearchComponent } from './modules/main/components/hero-search/hero-search.component';
import { PhonePipe } from './modules/main/pipes/phone.pipe';
import { NumberToStringPipe } from './modules/main/pipes/number-to-string.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
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
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
