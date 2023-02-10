import { NewUserModel } from './../../../main/models/new-user.model';
import { UsersService } from './../../../main/services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private readonly userService: UsersService) {

  }
}
//
//   //   const user = new NewUserModel("12d3fdfdfdfsfd1254t","310258746", "12345644", "123454887", "Carlos pardo", "carlos.pardo@sofka.com.co")
//   //   this.userService.createUser(user).subscribe({
//   //     next: data => console.log(data),
//   //     error:err => console.log(err),
//   //     complete:() => console.log("complete")
//   //   })
//   // }

// }
