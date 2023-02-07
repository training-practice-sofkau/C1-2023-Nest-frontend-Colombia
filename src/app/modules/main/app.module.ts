import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/modules/heroes/services/in-memory-data/in-memory-data.service';

import { AppComponent } from './pages/app.component'; //module app principal
//created modules
import { HeroesComponent } from 'src/app/modules/heroes/pages/heroes.component';
import { HeroDetailComponent } from 'src/app/modules/heroes/components/hero-detail/hero-detail.component';
import { MessagesComponent } from 'src/app/modules/heroes/components/message/messages.component';
import { DashboardComponent } from 'src/app/modules/heroes/components/dashboard/dashboard.component';
import { HeroSearchComponent } from 'src/app/modules/heroes/components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
