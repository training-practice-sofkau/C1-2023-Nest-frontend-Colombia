import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'sofka-bank-deposits-detail',
  templateUrl: './deposits-detail.component.html',
  styleUrls: ['./deposits-detail.component.scss']
})
export class DepositsDetailComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id)

  }

}
