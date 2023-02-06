import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mock-hero';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent  implements OnInit{
    heroes = Heroes;
    selectedHero ?: Hero;
    constructor(){}
    ngOnInit() {
    }
    onSelect(hero:Hero){
      this.selectedHero = hero;
      console.log(this.selectedHero);
    }
}
