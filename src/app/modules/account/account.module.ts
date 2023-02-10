import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { BalanceComponent } from './components/balance/balance.component';
import { AccountComponent } from './pages/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccountComponent,BalanceComponent
  ],
  imports: [
    CommonModule,AccountRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AccountModule { }
