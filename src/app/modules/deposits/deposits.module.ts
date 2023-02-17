// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { DepositsDetailComponent } from './pages/deposits-detail/deposits-detail.component';

// Modules
import { DepositsRoutingModule } from './deposits-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DepositsDetailComponent,
  ],
  imports: [
    CommonModule,
    DepositsRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
  ]
})
export class DepositsModule { }
