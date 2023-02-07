import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { Heroes } from '../mock-hero';
import { MessageService } from '../menssage/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable <Hero[]> {
    this.messageService.add('HeroService: Fetched Heroes')
    return of(Heroes);
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = Heroes.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
