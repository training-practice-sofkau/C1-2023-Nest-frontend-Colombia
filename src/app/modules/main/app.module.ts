import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';
import { RegisterComponent } from './pages/register/register.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MyPipePipe,
    RegisterComponent,
    InfoUserComponent,
    DepositComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
