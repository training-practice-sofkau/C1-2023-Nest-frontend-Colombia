import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { AccountComponent } from './pages/account/account.component';
import { TransferComponent } from './pages/transfer/transfer.component';


@NgModule({
  declarations: [
    AppComponent, 
    IndexComponent, 
    RegisterComponent, 
    UserComponent, 
    DepositComponent, 
    AccountComponent, 
    TransferComponent ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
