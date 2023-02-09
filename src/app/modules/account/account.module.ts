import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { BalanceComponent } from './components/balance/balance.component';
import { AccountComponent } from './pages/account/account.component';



@NgModule({
  declarations: [
    AccountComponent,BalanceComponent
  ],
  imports: [
    CommonModule,AccountRoutingModule
  ]
})
export class AccountModule { }
