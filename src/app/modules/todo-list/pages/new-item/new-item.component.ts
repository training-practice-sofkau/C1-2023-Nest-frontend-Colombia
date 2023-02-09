import { Component } from '@angular/core';

@Component({
  selector: 'sofka-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent {
  routePrincipal: string[];
  routeExperienciaLaboral: string[];

  constructor() {
    this.routePrincipal = ['../'];
    this.routeExperienciaLaboral = ['../experiencia-laboral'];
  }
}
