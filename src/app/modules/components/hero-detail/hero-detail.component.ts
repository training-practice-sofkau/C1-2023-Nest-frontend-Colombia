import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { Input } from '@angular/core';

@Component({
  selector: 'sofka-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() hero?: Hero;
}
