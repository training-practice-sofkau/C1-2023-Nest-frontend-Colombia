import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  //heroes = HEROES;
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    //this.selectedHero = hero;
    //this.heroes = this.heroService.getHeroes()
  }

  //observable
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

//original
/*getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}*/

}
