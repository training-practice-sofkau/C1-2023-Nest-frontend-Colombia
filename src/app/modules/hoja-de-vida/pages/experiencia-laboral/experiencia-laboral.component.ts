import { Component } from '@angular/core';

@Component({
  selector: 'sofka-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss']
})
export class ExperienciaLaboralComponent {
  routePrincipal: string[];
  routeEstudios: string[];

  constructor() {
    this.routePrincipal = ['../'];
    this.routeEstudios = ['../estudios'];
  }
}
