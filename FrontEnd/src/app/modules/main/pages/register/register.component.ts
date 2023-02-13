import { Component } from "@angular/core";
import { UsersService } from '../../services/users/users.service';
import { newUserModel } from '../../models/new-user.model';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  
  routeForgot: string[];
  routeRegister:string[];
  
  constructor(private readonly userService: UsersService){
    
    this.routeForgot= ['forgot']
    this.routeRegister = ['register']
  }

  sendData(): void{
    const user = new newUserModel("07cd5b09-4aca-4946-a720-d748f4016552","1231231232", "Daniel22","daniel3@gmail.com","123123123123","Jersondani13577") 
    this.userService.createUser(user).subscribe({
      next: (data)=> console.log(data),
      error: (error) => console.error(error),
      complete:() => console.info('complete')
    } 
    )
  }

}

