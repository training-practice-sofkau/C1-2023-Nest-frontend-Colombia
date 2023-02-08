import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', phone: "3196247894", lastAccident: '19920322', savedbyhero: '5', lastname: 'perez', price: '789456123', force: '40000', speed: '80', lastjob: '2008-01-03' },
      { id: 13, name: 'Miguel',  phone: "3188478940", lastAccident: '20151118', savedbyhero: '5', lastname: 'perez', price: '789456123', force: '40000', speed: '80', lastjob: '2015-01-03' },
      { id: 14, name: 'Celeritas', phone: "3196247894", lastAccident: '2022016', savedbyhero:'87', lastname: 'perez', price: '789456123', force: '40000', speed: '80', lastjob: '2019-01-03' },
      { id: 15, name: 'Magneta', phone: "3196247894", lastAccident: '20210530', savedbyhero:'0', lastname: 'perez', price: '789456123', force: '40000', speed: '80', lastjob: '2015-01-03' },


    ]; return {heroes};
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