import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sofka-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  constructor(private router: Router) {}
  redirect() {
    this.router.navigate(['infouser']);
  }
}
