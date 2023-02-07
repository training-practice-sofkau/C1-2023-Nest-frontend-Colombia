import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../main/app.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from 'src/app/components/hero-search/hero-search.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent
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
