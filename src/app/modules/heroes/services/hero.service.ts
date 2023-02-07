import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../interfaces/heroes.interface';
import { HEROES } from '../components/heroes-listado/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
