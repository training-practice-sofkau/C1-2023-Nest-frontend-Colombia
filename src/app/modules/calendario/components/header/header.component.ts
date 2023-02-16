import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/main/services/auth.service';

@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() auth: boolean;

  constructor(private readonly authService: AuthService) {
    this.auth = true;
  }

  logOut(): void{
    this.authService.SignOut();

  }
}
