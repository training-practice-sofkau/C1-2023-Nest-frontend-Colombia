import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero-birthday',
  templateUrl: './pipe.component.html'
  })

export class HeroBirthdayComponent implements OnInit{
  birthday = new Date(1979, 12, 25);
  heroe : string = 'Mediano'
  herox : string = 'Gigante'
  savings = 500000;
  weigth = 3.800;
  natalityRate = 1.88;
  yearBorn = 'XXXXX';
  phoneNumber = '3185547985';
  name = 'Taco Taco';

  constructor() {}

  ngOnInit(): void {}
}
