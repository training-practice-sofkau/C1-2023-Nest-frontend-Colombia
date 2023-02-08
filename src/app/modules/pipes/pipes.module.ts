import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAngularComponent } from './pages/pipes-angular/pipes-angular.component';
import { PipesPersonalizadoComponent } from './pages/pipes-personalizado/pipes-personalizado.component';
import { RelativeTimePipe } from './pipes/pipe-time/relative-time.pipe';
import { NumeroCelPipe } from './pipes/pipe-numero/numero-cel.pipe';
import { VerificarPipe } from './pipes/pipe-verificar/verificar.pipe';



@NgModule({
  declarations: [
    PipesAngularComponent,
    PipesPersonalizadoComponent,
    RelativeTimePipe,
    NumeroCelPipe,
    VerificarPipe,
  ],
  exports:[
    PipesAngularComponent,
    PipesPersonalizadoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
