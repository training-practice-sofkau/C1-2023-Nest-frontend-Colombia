import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HEROES } from 'src/app/models/heroe.model';
import { MessageService } from 'src/app/services/message/message.service';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
