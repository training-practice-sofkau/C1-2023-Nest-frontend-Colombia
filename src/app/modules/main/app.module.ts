import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './pages/app.component';
//import { DashboardComponent } from './modules/components/dashboard/dashboard.component';

//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//import { HeroesComponent } from './modules/pages/heroes/heroes.component';
//import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardComponent } from '../heroes/components/dashboard/dashboard.component';
import { NamePipe } from '../../pipes/my-pipes/name/name.pipe';
import { HeroDetailComponent } from '../heroes/components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../heroes/components/hero-search/hero-search.component';
import { MessagesComponent } from '../heroes/components/messages/messages.component';
import { HeroesComponent } from '../heroes/heroes/heroes.component';
import { InMemoryDataService } from '../heroes/services/in-memory-data/in-memory-data.service';
import { PipeComponent } from 'src/app/pipes/pages/pipe.component';
import { SalaryPipe } from 'src/app/pipes/my-pipes/salary/salary.pipe';
import { PhonePipe } from 'src/app/pipes/my-pipes/phone/phone.pipe';
//import { InMemoryDataService } from './in-memory-data.service';
//import { HeroSearchComponent } from './hero-search/hero-search.component';
//import { DashboardComponent } from '../heroes/components/dashboard/dashboard.component';
import {RelativeTimePipe} from 'src/app/pipes/my-pipes/relative-time/relative-time.pipe'


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
    MessagesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    PipeComponent,
    SalaryPipe,
    PhonePipe,
    NamePipe,
    RelativeTimePipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
