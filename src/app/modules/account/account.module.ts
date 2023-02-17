import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsDetailComponent } from './pages/accounts-detail/accounts-detail.component';
import { AccountRoutingModule } from './account-routing.module';
import { NewDepositComponent } from '../deposits/components/new-deposit/new-deposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTransferComponent } from '../transfers/components';



@NgModule({
  declarations: [
    AccountsDetailComponent,
    NewDepositComponent,
    NewTransferComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccountsModule { }
