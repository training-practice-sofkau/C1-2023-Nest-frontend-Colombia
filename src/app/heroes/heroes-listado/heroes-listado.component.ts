import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../interface/heroes.interface';

@Component({
  selector: 'sofka-heroes-listado',
  templateUrl: './heroes-listado.component.html',
  styleUrls: ['./heroes-listado.component.scss']
})
export class HeroesListadoComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } 
}
