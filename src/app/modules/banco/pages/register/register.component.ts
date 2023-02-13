import { NewUserModel } from './../../../main/models/new-user.model';
import { UsersService } from './../../../main/services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;

  constructor(public readonly customerService: UsersService) {
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }
  registercustomer(): void {
    const customer = new NewUserModel(
      "7a361cba-2546-4d9b-80fe-28e07bc41e1f","10536885",  "Carlos pardo", "carlos.pardo@sofka.com.co","31158698745", "An247963456"
    );
    this.customerService.createUser(customer).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.info("completado"),
    });
  }

  ngOnInit(): void {

   }

  // const user = new NewUserModel("12d3fdfdfdfsfd1254t","310258746", "12345644", "123454887", "Carlos pardo", "carlos.pardo@sofka.com.co")
  // this.userService.createUser(user).subscribe({
  //   next: data => console.log(data),
  //   error:err => console.log(err),
  //   complete:() => console.log("complete")
  // })

}


