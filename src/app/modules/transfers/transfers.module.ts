// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NewTransferComponent } from './pages/new-transfer/new-transfer.component';
import { TransfersDetailComponent } from './pages/transfers-detail/transfers-detail.component';

// Modules
import { transfersRoutingModule } from './transfers-routing.module';

@NgModule({
  declarations: [
    NewTransferComponent,
    TransfersDetailComponent
  ],
  imports: [
    CommonModule,
    transfersRoutingModule,
  ]
})
export class TransfersModule { }
