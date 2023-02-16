import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common';
import { BackgroundColorService } from '../../../../shared/services/background-color.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'sofka-bank-deposits-detail',
  templateUrl: './deposits-detail.component.html',
  styleUrls: ['./deposits-detail.component.scss']
})
export class DepositsDetailComponent implements OnInit {

accountId!: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly accountId$: BackgroundColorService,
  ) {}

  ngOnInit(): void {
    
  }
}
