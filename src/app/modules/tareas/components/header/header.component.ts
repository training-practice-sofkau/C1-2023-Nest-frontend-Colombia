import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/seguridad/services/auth/auth.service';

@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() cuenta: string | null = '';

  constructor(private readonly authServive: AuthService) {
  }

  logout(): void{
    this.authServive.SignOut();
  }

  prueba(){
    console.log('hola mundo');
  }
}
