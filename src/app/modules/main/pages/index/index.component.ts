import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  constructor(public readonly authService: AuthService) {}

  auth(): void{
    this.authService.GoogleAuth();
  }


}
