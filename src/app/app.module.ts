import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InMemoryDataService } from './services/inMemoryData/in-memory-data.service';
import { HeroSearchComponent } from "./components/hero-search/hero-search.component";
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { PricesComponent } from './components/prices/prices.component';
import { PhoneFormatPipe } from './pipes/prueba.pipe';
import { DateFormatPipe } from './pipes/date.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent,
        HeroSearchComponent,
        HeroFormComponent,
        PricesComponent,
        //TitleCasePip,
        PhoneFormatPipe,
        DateFormatPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        TitleCasePipe,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        //TitleCasePipeModule
    ]
})
export class AppModule { }
