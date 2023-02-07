import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mock-hero';
import { HeroService } from '../servicios/hero.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent  implements OnInit{

    heroes ?: Hero[];

    constructor(private heroService: HeroService){}

    ngOnInit() {
      this.getHeroes();
    }

    getHeroes(){
      this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));

    }
}
