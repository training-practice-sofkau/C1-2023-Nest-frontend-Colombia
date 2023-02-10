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
import { CustomPipeDataPipe } from './pipes/custom-pipe-data/custom-pipe-data.pipe';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { UpdateAccountComponent } from './pages/update-account/update-account.component';
import { UpdateCostumerComponent } from './pages/update-costumer/update-costumer.component';
import { CreateDepositComponent } from './pages/create-deposit/create-deposit.component';
import { CreateTransferComponent } from './pages/create-transfer/create-transfer.component';
import { InfoCostumerComponent } from './pages/info-costumer/info-costumer.component';
import { InfoDepositComponent } from './pages/info-deposit/info-deposit.component';
import { InfoTransferComponent } from './pages/info-transfer/info-transfer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderAfterLoginComponent } from './components/header-after-login/header-after-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavInfoCustomerComponent } from './components/nav-info-customer/nav-info-customer.component';
import { ServiceUserService } from './services/service-user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PruebaPipeComponent,
    CustomPipeMomentjsPipe,
    CustomPipePhonePipe,
    CustomPipeDataPipe,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    InfoCostumerComponent,
    InfoDepositComponent,
    InfoTransferComponent,
    CreateAccountComponent,
    CreateDepositComponent,
    CreateTransferComponent,
    UpdateAccountComponent,
    UpdateCostumerComponent,
    HeaderComponent,
    HeaderAfterLoginComponent,
    FooterComponent,
    NavInfoCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
