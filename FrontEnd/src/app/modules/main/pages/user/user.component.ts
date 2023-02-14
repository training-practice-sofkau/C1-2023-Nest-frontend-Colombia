import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { IUsers } from '../../interfaces/users.interface';

@Component({
  selector: 'sofka-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: IUsers[];

  constructor(private readonly usersService: UsersService) {
    this.users = new Array<IUsers>();
  }
  ngOnInit(): void {
   this.usersService.getAll().subscribe({
    next: data =>{
      this.users=data,
      console.log(data)
    },
    error: (error) => console.error(error),
    complete: () => console.log('complete')
  })
  }
}
