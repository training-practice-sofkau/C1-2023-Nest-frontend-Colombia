import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-hero';
import { HeroService } from '../servicios/hero.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService){}
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes.slice(1,5));
  }

}
