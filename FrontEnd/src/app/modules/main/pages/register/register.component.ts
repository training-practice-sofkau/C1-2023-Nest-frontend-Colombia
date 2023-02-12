import { Component } from "@angular/core";


@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  routeUser: string[];
  routeForgot: string[];
  
  constructor(){
    this.routeUser = ['user']
    this.routeForgot= ['forgot']
  }

}

