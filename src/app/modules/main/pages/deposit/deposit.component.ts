import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'sofka-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  constructor(private router: Router) {}
  redirect() {
    this.router.navigate(['deposit']);
  }
}
