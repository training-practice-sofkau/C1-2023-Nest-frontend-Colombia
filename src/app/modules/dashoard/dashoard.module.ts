import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardRoutingModule } from './dashoard-routing.module';
import { HomeeComponent } from './pages/homee/homee.component';

@NgModule({
  declarations: [HomeeComponent],
  imports: [CommonModule, DashoardRoutingModule],
})
export class DashoardModule {}
