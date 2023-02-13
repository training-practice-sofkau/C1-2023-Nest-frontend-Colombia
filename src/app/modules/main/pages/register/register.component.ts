import { Component } from '@angular/core';
import { newUserModel } from '../../models/new-user.model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  routrHome: string[];
  constructor(private readonly user$: UsersService) {
    this.routrHome = ['../'];
  }
  senData(): void {
    const user = new newUserModel(
      'adbf99cd-e973-4e2b-88e0-fab8c6ee77c8',
      '1117485113',
      'firulais nuevo',
      'felipe@gmail.com',
      '3124589746',
      'Jebkoj*7777'
    );
    this.user$.createUser(user).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}
