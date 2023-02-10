import { Component } from '@angular/core';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  routeEstudios: string[];

  constructor() {
    this.routeEstudios = ['estudios'];
  }
}
