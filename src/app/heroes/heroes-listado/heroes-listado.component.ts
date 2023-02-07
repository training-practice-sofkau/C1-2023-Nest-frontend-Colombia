import { Component, OnInit } from '@angular/core';

import { Hero } from '../interface/heroes.interface';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'sofka-heroes-listado',
  templateUrl: './heroes-listado.component.html',
  styleUrls: ['./heroes-listado.component.scss']
})
export class HeroesListadoComponent implements OnInit {

  selectedHero?: Hero;

 heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}