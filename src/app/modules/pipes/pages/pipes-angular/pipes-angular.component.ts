import { Component } from '@angular/core';

@Component({
  selector: 'sofka-pipes-angular',
  templateUrl: './pipes-angular.component.html',
  styleUrls: ['./pipes-angular.component.scss']
})
export class PipesAngularComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  upper: string = 'hola mundo';
  lower: string = 'HOLA MUNDO';
  valor: number = 2000;
  numero: number = 250646.556;
  porcentaje: number = 0.50;
  
}
