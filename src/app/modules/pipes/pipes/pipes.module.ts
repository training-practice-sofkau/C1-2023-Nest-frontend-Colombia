import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesCustomComponent } from '../pages/pipes-custom/pipes-custom.component';
import { phoneNumber } from './pipesPhoneNumber/phoneNumber.pipe';
import { RelativeTimePipe } from './pipesTiempo/relativeTime.pipe';
import { SuperPoder } from './pipesSuperPoder/superPoder.pipe';

@NgModule({
  declarations: [
    PipesCustomComponent,
    phoneNumber,
    RelativeTimePipe,
    SuperPoder

  ],
  exports:[

  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
