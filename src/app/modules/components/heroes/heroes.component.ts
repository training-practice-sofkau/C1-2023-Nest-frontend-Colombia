import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mocks/mock-heroes';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'sofka-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
