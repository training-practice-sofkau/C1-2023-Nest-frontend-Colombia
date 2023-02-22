import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

@Component({
  selector: 'sofka-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.scss']
})
export class NarbarComponent {
  constructor(private readonly authService: AuthService) {}

  logout(): void {
    this.authService.SignOut();
  }
}
