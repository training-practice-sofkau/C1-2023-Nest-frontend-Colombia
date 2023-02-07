import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../../componentes/heroes/heroes.component';
import { HeroDetailComponent } from '../../componentes/hero-detail/hero-detail.component';
import { MessagesComponent } from '../../componentes/messages/messages.component';
import { IndexComponent } from '../index/index.component';
import { PhonePipe } from '../../pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PhonePipe
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }