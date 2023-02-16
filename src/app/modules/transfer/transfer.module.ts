import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './pages/transfer/transfer.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    FormsModule
  ]
})
export class TransferModule { }
