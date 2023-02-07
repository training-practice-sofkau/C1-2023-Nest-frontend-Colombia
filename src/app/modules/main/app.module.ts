import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/modules/heroes/services/in-memory-data/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './pages/app.component';
//
import { DashboardComponent } from '../heroes/components/dashboard/dashboard.component';
import { HeroDetailComponent } from 'src/app/modules/heroes/components/hero-detail/hero-detail.component';
import { HeroesComponent } from 'src/app/modules/heroes/pages/heroes.component';
import { HeroSearchComponent } from 'src/app/modules/heroes/components/hero-search/hero-search.component';
import { MessagesComponent } from 'src/app/modules/heroes/components/messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
