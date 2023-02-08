import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero-birthday',
  templateUrl: './pipe.component.html'


  })
export class HeroBirthdayComponent implements OnInit{
  birthday = new Date(1990, 5, 21); // April 15, 1988 -- since month parameter is zero-based
  xmen : string = 'Grande'
  xmen2 : string = 'Pequeno'
  savings = 45000;
  weigth = 3.8087;
  natalityRate = 1.44;
  yearBorn = '1990';
  phoneNumber = '3213529636';
  name = 'Rolando Hernandez';

  constructor() {}

  ngOnInit(): void {}
}




