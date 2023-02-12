import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sofka-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent {
  routePrincipal: string[];
  routeExperienciaLaboral: string[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routePrincipal = ['../'];
    this.routeExperienciaLaboral = ['../experiencia-laboral'];
  }

  goTo(): void {
    // this.router.navigate(['../experiencia-laboral'], {
    //   relativeTo: this.route,
    // });
    this.router.navigate(['./', 'hoja-de-vida', 'experiencia-laboral']);
  }
}
