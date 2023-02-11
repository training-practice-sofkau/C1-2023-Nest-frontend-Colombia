import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryDataService } from './shared/services/in-memory-data.service';
;
import { AppComponent } from './modules/main/pages/app/app.component';
import { RegisterComponent } from './modules/main/pages/register/register.component';
;



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
    RegisterComponent,
   

  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
