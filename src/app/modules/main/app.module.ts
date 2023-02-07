import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent,DashboardComponent,MessagesComponent,HeroDetailComponent } from './components';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PruebaPipeComponent } from './components/prueba-pipe/prueba-pipe.component';
import { CustomPipeMomentjsPipe } from './pipes/custom-pipe-momentjs/custom-pipe-momentjs.pipe';
import { CustomPipePhonePipe } from './pipes/custom-pipe-phone/custom-pipe-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PruebaPipeComponent,
    CustomPipeMomentjsPipe,
    CustomPipePhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
