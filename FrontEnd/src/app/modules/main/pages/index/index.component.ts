import { Component } from '@angular/core';


@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  
  entrydate: Date;
  name: string;
  lastName: string;
  age: number;
  
routeRegister: string [];
routeUser: string[];

  constructor() { // user$ = userService

    this.routeRegister = ['register']
    this.routeUser = ['user']

    this.entrydate = new Date;
    this.name = 'Juan Esteban';
    this.lastName = 'Patiño Valencia';
    this.age = 41;    
  }


}
