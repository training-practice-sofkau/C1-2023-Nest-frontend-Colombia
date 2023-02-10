import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './componente/app.component';
import { RouterModule } from '@angular/router';

//Componentes

import { HeroesComponent } from '../heroes/pages/heroes.component';
import { HeroDetailComponent } from '../heroes/componentes/hero-detail/hero-detail.component';
import { MessagesComponent } from '../heroes/componentes/messages/messages.component';
import { DashboardComponent } from '../heroes/componentes/dashboard/dashboard.component';
import { HeroSearchComponent } from '../heroes/componentes/hero-search/herosearch.component';
import { MyPipePipe } from '../my-pipes/my-pipe.pipe';
import { HeroBirthdayComponent } from '../heroes/pipes/pipe/pipe.component';



import { TareasModule } from '../tareas/tareas.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [	
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroBirthdayComponent,
    MyPipePipe,
      IndexComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TareasModule,
    RouterModule


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
