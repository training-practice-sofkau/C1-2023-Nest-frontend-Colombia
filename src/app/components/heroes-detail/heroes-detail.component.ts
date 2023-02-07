import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero?: Hero;
}
