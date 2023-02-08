import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice',humanName: "Juan",phone : '3004567883', money: 3435674, power: 30, planet: 'Vormir', genre:'male', birthday:"01/02/2015", percent:"0.8"},
      { id: 13, name: 'Bombasto',humanName: "Pedro", phone : '3004567883' ,  money: 122231,power: 70, planet: 'Titan',genre:'female' , birthday:"11/09/2000" , percent:"05.74"},
      { id: 14, name: 'Celeritas',humanName: "Sara", phone : '3004567883' , money: 983854,power: 92,planet: 'Asgard', genre:'ciborg' , birthday:"06/22/2010" , percent :"0.7564"},
      { id: 15, name: 'Magneta' ,humanName: "Valentina", phone : '3004567883', money: 33245674,power: 10, planet: 'Tierra' ,genre:'female', birthday:"02/12/2002", percent :"0.774"},
      { id: 16, name: 'RubberMan',humanName: "Ruben", phone : '3004567883', money: 4355674 ,power: 55, planet: 'Cygnus' , genre:'male', birthday:"04/05/2015", percent :"00.66"},
      { id: 17, name: 'Dynama',humanName: "Manuela", phone : '3004567883',  money: 123174,power: 100 ,planet: 'Vormir', genre:'female' , birthday:"09/30/2006", percent :"0.64"},
      { id: 18, name: 'Dr. IQ',humanName: "Sebastian", phone : '3004567883' , money: 56774,power: 31, planet: 'Xandar' , genre:'male',birthday:"02/02/2012", percent :"0.764"},
      { id: 19, name: 'Magma',humanName: "Maria", phone : '3004567883' , money: 3862323,power: 5, planet: 'tierra' , genre:'female', birthday:"03/03/2013", percent :"0.1"},
      { id: 20, name: 'Tornado',humanName: "Paola", phone : '3004567883', money: 44564,power:44 , planet: 'Halfworld', genre:'male', birthday:"09/04/2005", percent :"0.994"} 
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
