import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  routeEstudios: string[];

  constructor() {
    this.routeEstudios = ['sign_in'];
  }

}
