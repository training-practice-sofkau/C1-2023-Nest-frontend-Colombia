import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { ConversionMoneyPipe } from './pipes/conversion-money.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MessagesComponent } from './components/messages/messages.component';
import { PowerPipe } from './pipes/power.pipe';
import { MomentPipe } from './pipes/moment.pipe';


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
    HeroSearchComponent,
    MessagesComponent,
    PhonePipe,
    ConversionMoneyPipe,
    PowerPipe,
    MomentPipe,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
