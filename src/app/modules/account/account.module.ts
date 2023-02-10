import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsDetailComponent } from './pages/accounts-detail/accounts-detail.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { AccountRoutingModule } from './account-routing.module';
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';



@NgModule({
  declarations: [
    AccountsDetailComponent,
    NewAccountComponent,
    DeleteAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountsModule { }
