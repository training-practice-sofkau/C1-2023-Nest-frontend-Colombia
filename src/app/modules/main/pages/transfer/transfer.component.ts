import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sofka-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  constructor(private router: Router) {}
  redirect() {
    this.router.navigate(['transfer']);
  }
}
