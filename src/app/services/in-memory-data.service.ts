import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', phone:"3168676899",date: "20180223", datebirthday:"01/02/2015", localcity:"Barranca", nick:"PEPE",coin:"155545515",stronger:"458.154", percentage:"0.7", ChangeMoney:5000},
      { id: 13, name: 'Bombasto',phone:"3156897452",date: "20050101", datebirthday:"01/02/3015", localcity:"Bucara", nick:"FELIPE",coin:"4752745",stronger:"45.154", percentage:"07.158", ChangeMoney:451},
      { id: 14, name: 'Celeritas',phone:"3014578695",date: "20000209", datebirthday:"01/02/4012" , localcity:"Cartagena", nick:"CARLOS",coin:"452420",stronger:"58.154", percentage:"09.158", ChangeMoney:4534},
      { id: 15, name: 'Magneta',phone:"3201547896",date: "20230925", datebirthday:"01/02/1005" , localcity:"Bogota", nick:"PEDRO",coin:"155545453245515",stronger:"7.154", percentage:"077.158", ChangeMoney:32453},
      { id: 16, name: 'RubberMan',phone:"3154785691",date: "19950509", datebirthday:"01/02/1023", localcity:"Cali", nick:"JUAN",coin:"4532452045",stronger:"58.154", percentage:"097.158", ChangeMoney:43521},
      { id: 17, name: 'Dynama',phone:"3102587963",date: "19001230", datebirthday:"01/02/2045" , localcity:"Huila", nick:"SANDRA",coin:"4512.",stronger:"46.154", percentage:"067.158", ChangeMoney:43123},
      { id: 18, name: 'Dr. IQ' ,phone:"311452789",date: "17590109", datebirthday:"01/02/2011", localcity:"pasto", nick:"JULIANA",coin:"4534120.1",stronger:"12.154", percentage:"097.158", ChangeMoney:4534534},
      { id: 19, name: 'Magma',phone:"3224578963",date: "12580306", datebirthday:"01/02/2014" , localcity:"Pereira", nick:"OSCAR",coin:"453475",stronger:"13.154", percentage:"023.158", ChangeMoney:433212},
      { id: 20, name: 'Tornado',phone:"3214578963",date: "30450807", datebirthday:"01/02/2023" , localcity:"Panplona", nick:"ANDRES",coin:"452786",stronger:"78.154", percentage:"037.158", ChangeMoney:4523754}
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