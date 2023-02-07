import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from '../main/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from "./pages/heroes-page/heroes.component";
import { HeroesListadoComponent } from "./components/heroes-listado/heroes-listado.component";
import { HeroesDetalleComponent } from './components/heroes-detalle/heroes-detalle.component';
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InMemoryDataService } from "./services/in-memory-data.service";
import { HeroSearchComponent } from './components/hero-search/hero-search.component';



@NgModule({
    declarations: [
        HeroesComponent,
        HeroesListadoComponent,
        HeroesDetalleComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    exports:[
        HeroesComponent,
        MessagesComponent,
    ],
    imports:
    [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
    ]
})
export class HeroesModule {}