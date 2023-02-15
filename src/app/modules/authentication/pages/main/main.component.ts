import { Component } from '@angular/core';
import { NewUserModel } from '../../models/new-user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  users: NewUserModel[];

  routeSignIn: string[];
  routeLogIn: string[];

  constructor(private readonly usersService: UserService) {
    this.users = new Array<NewUserModel>();

    this.routeSignIn = ['sign_in'];
    this.routeLogIn = ['log_in'];
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe({
      next: data => console.log('DATA ', data),
      error: err => console.log(err),
      complete: () => console.log('complete')
    });
  }

}
