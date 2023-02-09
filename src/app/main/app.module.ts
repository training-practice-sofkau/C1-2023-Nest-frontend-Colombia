import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './componente/app.component';
import { HeroesComponent } from '../heroes/pages/heroes.component';
import { HeroDetailComponent } from '../heroes/componentes/hero-detail/hero-detail.component';
import { MessagesComponent } from '../heroes/componentes/messages/messages.component';
import { DashboardComponent } from '../heroes/componentes/dashboard/dashboard.component';
import { HeroSearchComponent } from '../heroes/componentes/hero-search/herosearch.component';
import { MyPipePipe } from '../my-pipes/my-pipe.pipe';

import { AppRoutingModule } from './app-routing.module'
import { HeroBirthdayComponent } from '../heroes/pipes/pipe/pipe.component';
import { TareasModule } from '../tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroBirthdayComponent,
    MyPipePipe

   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TareasModule


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
