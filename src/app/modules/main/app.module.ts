import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';
import { RegisterComponent } from './pages/register/register.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MyPipePipe,
    RegisterComponent,
    InfoUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
