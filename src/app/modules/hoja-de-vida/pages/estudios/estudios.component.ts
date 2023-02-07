import { Component } from '@angular/core';

@Component({
  selector: 'sofka-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss'],
})
export class EstudiosComponent {
  routePrincipal: string[];
  routeExperienciaLaboral: string[];

  constructor() {
    this.routePrincipal = ['../'];
    this.routeExperienciaLaboral = ['../experiencia-laboral'];
  }
}
