import { Component, OnInit } from '@angular/core';
import { HEROES } from '../heroes/mock-heroes';
import { Hero } from './hero';

@Component({
  selector: 'sofka-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
