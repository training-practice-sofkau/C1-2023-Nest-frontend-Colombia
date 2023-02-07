import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [{
      id: 1,
      name: "Julian",
      clasification:"fuerte",
      phone : "3206201428",
      date: "20180223",
      state: true,
      birthday: "1998-03-25",
      payroll: 500,
      wins: 12,
      percent: 0.1},
      {
      id: 2,
      name: "Brian",
      clasification:"Agil",
      phone : "3206201428",
      date: "20170223",
      state: false,
      birthday: "1999-03-25",
      payroll: 100,
      wins: 1,
      percent: 0.5},
    {
      id: 2,
      name: "Estafany",
      clasification:"Veloz",
      phone : "3206201428",
      date: "20120223",
      state: true,
      birthday: "1998-03-25",
      payroll: 500,
      wins: 142,
      percent: 0.4}
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
