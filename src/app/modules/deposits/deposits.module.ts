import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { DepositsDetailComponent } from './deposits-detail/deposits-detail.component';
import { DepositsRoutingModule } from './deposits-routing.module';



@NgModule({
  declarations: [
    NewDepositComponent,
    DepositsDetailComponent
  ],
  imports: [
    CommonModule,
    DepositsRoutingModule,
  ]
})
export class DepositsModule { }
