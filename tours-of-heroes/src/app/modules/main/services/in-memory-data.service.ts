import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/hero';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', phone : '3004567883' },
      { id: 13, name: 'Bombasto', phone : '3004567883' },
      { id: 14, name: 'Celeritas', phone : '3004567883' },
      { id: 15, name: 'Magneta' , phone : '3004567883' },
      { id: 16, name: 'RubberMan', phone : '3004567883' },
      { id: 17, name: 'Dynama', phone : '3004567883'},
      { id: 18, name: 'Dr. IQ', phone : '3004567883' },
      { id: 19, name: 'Magma', phone : '3004567883' },
      { id: 20, name: 'Tornado', phone : '3004567883' }
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
