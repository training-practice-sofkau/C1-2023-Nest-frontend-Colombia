import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { BalanceComponent } from './components/balance/balance.component';
import { AccountComponent } from './pages/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { ActionsComponent } from './components/actions/actions.component';



@NgModule({
  declarations: [
    AccountComponent,BalanceComponent, InfoComponent, ActionsComponent
  ],
  imports: [
    CommonModule,AccountRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AccountModule { }
