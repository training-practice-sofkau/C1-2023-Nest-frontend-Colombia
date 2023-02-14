import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';

@NgModule({
  declarations: [AppComponent, IndexComponent, MyPipePipe],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
