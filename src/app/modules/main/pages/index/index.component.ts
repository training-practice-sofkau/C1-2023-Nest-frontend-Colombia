import { Component } from '@angular/core';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  routeRegister: string[];

  constructor() {
    this.routeRegister = ['register'];
  }
}
