import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.scss']
})
export class MyPipeComponent{

  birthday = new Date(1998, 1, 1);
  fullNameToUpperCase = "Javier Leonardo Carrillo Murillo";
  careerToLowerCase = "Estudia INGENIERÍA DE Sistemas";
  salary = 1000000;
  height = 1.72;
  careerPercentage = 0.90;

  cardNumber = 4000001234567899;
  yearBorn = "1998";

  constructor(){}
}
