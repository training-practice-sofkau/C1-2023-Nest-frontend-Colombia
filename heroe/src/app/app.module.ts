import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRouthingModule } from './routhing/app-routhing.module';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroDetailComponent,
    MessagesComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouthingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
