import {
  Component,
  OnInit,
  NgModule,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
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
    private readonly state$: StateService
  ) {
    this.routeDashboard = ['../dashboard'];
    this.routeAdd = ['add'];
    this.routeList = ['list'];
    this.state = this.state$.State;
  }

  changeState(): void {
    this.state$.State = true;
    this.state = this.state$.State;
  }

  ngOnInit(): void {
    if (localStorage.getItem('userName') !== null) {
      this.changeState();
      this.userName = localStorage.getItem('userName');
    }
  }

  logout(): void {
    this.auth$.SignOut();
  }
}
