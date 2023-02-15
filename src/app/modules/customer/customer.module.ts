import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';



@NgModule({
  declarations: [CustomerDetailComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CustomerRoutingModule,
  ],
  exports:[CustomerRoutingModule]
})
export class CustomerModule { }
