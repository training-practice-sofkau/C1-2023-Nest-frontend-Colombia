import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/pages/app/app.component';
import { HeroDetailComponent } from './main/components/hero-detail/hero-detail.component';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
import { HeroesComponent } from './main/components/heroes/heroes.component';
import { InMemoryDataService } from './main/services/inMemoryData/in-memory-data.service';
import { HeroSearchComponent } from "./main/components/hero-search/hero-search.component";
import { HeroFormComponent } from './main/components/hero-form/hero-form.component';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './main/components/prices/prices.component';
import { PhoneFormatPipe } from './main/pipes/phoneFormat/prueba.pipe';
import { DateFormatPipe } from './main/pipes/date/date.pipe';
import { FilterByAgePipe } from './main/pipes/age/filter-by-age.pipe';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroFormComponent,
        PricesComponent,
        //TitleCasePip,
        HeroSearchComponent,
        PhoneFormatPipe,
        DateFormatPipe,
        FilterByAgePipe,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        AuthenticationModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        //TitleCasePipeModule
    ]
})
export class AppModule { }
