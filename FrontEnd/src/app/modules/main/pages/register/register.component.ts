import { Component } from "@angular/core";
import { UserModel } from "../../models/new-user.model";
import { UsersService } from "../../services/users/users.service";


@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  routeUser: string[];
  routeForgot: string[];

  fullName: string;
  document: string;
  documentType: string;
  email: string;
  phone: string;
  password: string;
  
  constructor(private readonly usersService: UsersService){
    this.routeUser = ['user'];
    this.routeForgot= ['forgot'];
    this.fullName = '';
    this.document = '';
    this.documentType= '';
    this.email = '';
    this.phone = '';
    this.password = '';

  }

  sendData(): void{
    const user = new UserModel(
      this.fullName ,
      this.document,
      this.documentType,
      this.email,
      this.phone ,
      this.password,
    );
    this.usersService.createUser(user).subscribe({
      next: data => {
        console.log(data),
        console.log(user)
       return(user) 
      },
      error: err => console.error(err),
      complete: () => console.log('complete')

    })
  }

}

