import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesCustomComponent } from '../pages/pipes-custom/pipes-custom.component';
import { phoneNumber } from './pipesPhoneNumber/phoneNumber.pipe';
import { RelativeTimePipe } from './pipesTiempo/relativeTime.pipe';


@NgModule({
  declarations: [
    PipesCustomComponent,
    phoneNumber,
    RelativeTimePipe,

  ],
  exports:[

  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
