import { Component } from '@angular/core';

@Component({
  selector: 'sofka-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  routeInfoUser: string[];
  constructor() {
    this.routeInfoUser = ['infouser'];
  }
}
