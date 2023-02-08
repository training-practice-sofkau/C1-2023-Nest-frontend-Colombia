import { Component } from '@angular/core';

@Component({
  selector: 'sofka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'Tour of Heroes';

  //DATETIPE
  dateOrigin = new Date(1988, 3, 15);

  //UPPERCASE
   nameSuperHeroeUpper = 'Iron Man';

   //LowerCase
   nameSuperHeroeLower = 'IRON MAN'

   //Currency

   dineroOfHeroe: number = 5000000;

   //DecimalPipe
    impuestosHeroe: number = 2.53245;

    //percent
    porcentaje = 0.60;




}
