import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'sofka-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  //inicializa el constructor y el servicio para inyectarlo
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  //creamos un array de heroes
  heroes: Hero[] = [];

  //obtenemos los heroes del metodo del servicio
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    //observable para obtener datos de metodos async
  }

  //al inicializarse el componente de los heroes obtenemos los heroes
  ngOnInit(): void {
    this.getHeroes();
  }

  //creamos una variable para almacenar el heroe seleccionado
  selectedHero?: Hero;

  //asignamos el heroe que seleccionamos en la vista a la variable ya creada y mostramos un mensaje
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
