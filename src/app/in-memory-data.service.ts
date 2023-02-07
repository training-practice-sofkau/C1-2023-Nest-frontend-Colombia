import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', phone: "3256984789", lastfigth: "7/03/2016", time: "16:00" },
      { id: 13, name: 'Bombasto' , phone: "3185684789", lastfigth: "9/10/2022", time: "19:00" },
      { id: 14, name: 'Celeritas', phone: "3112949698" , lastfigth: "2/03/1998", time: "18:00"},
      { id: 15, name: 'Magneta' , phone: "3285697412" , lastfigth: "1/03/2022", time: "15:00"},
      { id: 16, name: 'RubberMan' , phone: "3156984789", lastfigth: "3/08/2013", time: "23:00" },
      { id: 17, name: 'Dynama' , phone: "3179876541", lastfigth: "7/03/2016", time: "21:00"},
      { id: 18, name: 'Dr. IQ' , phone: "3656984789" , lastfigth: "8/04/2018", time: "22:00"},
      { id: 19, name: 'Magma' , phone: "3156984789" , lastfigth: "2/05/2011", time: "23:00"},
      { id: 20, name: 'Tornado' , phone: "3956984789", lastfigth: "7/03/2016", time: "24:00"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
