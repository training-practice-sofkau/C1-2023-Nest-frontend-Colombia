import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAngularComponent } from './pages/pipes-angular/pipes-angular.component';



@NgModule({
  declarations: [
    PipesAngularComponent
  ],
  exports:[
    PipesAngularComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
