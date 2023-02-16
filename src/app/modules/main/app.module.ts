import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.prod';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, MyPipePipe, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ReactiveFormsModule, FormsModule, HttpClientModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
