import { Component } from '@angular/core';
import { NewUserModel } from '../../models/new-user.model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  nombre: string;
  email: string;
  phone: string | undefined;

  constructor(private readonly users$: UsersService) {
    this.nombre = '';
    this.email = '';
  }

  sendData(): void {
    const user = new NewUserModel(this.nombre, this.email, this.phone);
    this.users$.createUser(user).subscribe({
      next: data => console.log(data),
      error: err => console.error(err),
      complete: () => console.info('complete')
    });
  }
}
