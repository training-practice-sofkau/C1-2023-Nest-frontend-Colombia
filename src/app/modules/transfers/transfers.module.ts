// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
//import { TransfersDetailComponent } from './pages/transfers-detail/transfers-detail.component';

// Modules
import { TransfersRoutingModule } from './transfers-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    //TransfersDetailComponent,
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
  ]
})
export class TransfersModule { }
