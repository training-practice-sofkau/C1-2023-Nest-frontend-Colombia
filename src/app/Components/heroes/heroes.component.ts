import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero = {
    id:1,
    name:'windstorm'
  }
}
