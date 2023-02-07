import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //module app principal
//created modules
import { HeroesComponent } from './modules/components/heroes/heroes.component';
import { HeroDetailComponent } from './modules/components/hero-detail/hero-detail.component';
import { MessagesComponent } from './modules/components/messages/messages.component';
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
