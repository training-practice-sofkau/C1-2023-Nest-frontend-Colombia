import { Component } from '@angular/core';
import * as auth from 'firebase/auth';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private readonly auth$: AuthService) { }



  logout(): void {

    this.auth$.SignOut();

  }




}
