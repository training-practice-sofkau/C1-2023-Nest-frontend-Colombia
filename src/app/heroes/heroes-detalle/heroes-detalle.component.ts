import { Component, Input } from '@angular/core';
import { Hero } from '../interface/heroes.interface';

@Component({
  selector: 'sofka-heroes-detalle',
  templateUrl: './heroes-detalle.component.html',
  styleUrls: ['./heroes-detalle.component.scss']
})
export class HeroesDetalleComponent {
  @Input() hero?: Hero;
}
