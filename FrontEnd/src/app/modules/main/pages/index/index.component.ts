import { Component } from '@angular/core';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  
routeRegister: string [];
routeUser: string[];
userName: string;
password : string;

  constructor() {
    this.routeRegister = ['register']
    this.routeUser = ['user']
    this.userName = ""
    this.password = ""
    
  }
}
