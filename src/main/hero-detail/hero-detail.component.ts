import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'sofka-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
