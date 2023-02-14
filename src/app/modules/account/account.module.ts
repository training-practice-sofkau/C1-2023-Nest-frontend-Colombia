import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsDetailComponent } from './pages/accounts-detail/accounts-detail.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    AccountsDetailComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountsModule { }
