import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../../security/security/userAuth/auth.service';
import { StateService } from '../../../../shared/services/state.service';

@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routeDashboard: string[];
  routeAdd: string[];
  routeList: string[];
  state: boolean;
  userName!: string | null;
  constructor(
    private readonly auth$: AuthService,
    private readonly stateAvatar$: StateService
  ) {
    this.routeDashboard = ['../dashboard'];
    this.routeAdd = ['add'];
    this.routeList = ['list'];
    this.state = this.stateAvatar$.State;
  }
  ngOnInit(): void {
    if (this.state === true) {
      this.userName = localStorage.getItem('userName');
    }
  }

  logout(): void {
    this.auth$.SignOut();
  }
}
