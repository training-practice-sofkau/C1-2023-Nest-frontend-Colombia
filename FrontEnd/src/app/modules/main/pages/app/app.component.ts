import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routeLogin: string[];

  constructor(){
    this.routeLogin = ['login']
  }
  title='be Bank'

}
