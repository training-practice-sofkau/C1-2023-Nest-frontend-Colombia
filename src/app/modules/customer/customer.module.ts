import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CustomerRoutingModule,
  ],
  exports:[CustomerRoutingModule]
})
export class CustomerModule { }
