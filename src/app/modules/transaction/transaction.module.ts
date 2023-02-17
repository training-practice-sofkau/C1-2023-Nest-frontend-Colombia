import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TransactionRoutingModule } from './transaction-routing.module';

import { SharedModule } from 'src/app/shared';
import { TransactionsComponent } from './components/transactions/transactions.component';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
  ]
})
export class TransactionModule { }
