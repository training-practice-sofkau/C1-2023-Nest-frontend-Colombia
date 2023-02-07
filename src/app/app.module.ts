import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { HeroSearchComponent } from "./components/hero-search/hero-search.component";

import { HeroesComponent } from "./components/heroes/heroes.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
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
  bootstrap: [ AppComponent ]
})

export class AppModule { }