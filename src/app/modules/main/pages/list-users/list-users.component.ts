import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'sofka-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: UserModel[];

  constructor(private readonly usersService: UsersService) {
    this.users = new Array<UserModel>();
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe({
      next: data => (this.users = data.data),
      error: err => console.log(err),
      complete: () => console.log('complete')
    });
  }

  myFn(id: string): void {
    console.log('id: ' + id);
  }
}
