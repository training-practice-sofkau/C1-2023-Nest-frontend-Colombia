import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetUser } from '../../interfaces/user-get/user-get.interface';
import { NewUserModel } from '../../models/new-user.model';
import { ServiceUserService } from '../../services/user-service/service-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  document: string;
  documentType: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;

  constructor(private readonly userService: ServiceUserService) {
    this.document = ""
    this.fullName = ""
    this.email = ""
    this.password = ""
    this.phone = ""
    this.documentType = ""
  }

  ngOnInit(): void {
  }

  createUser() {
    const newUser = new NewUserModel(this.documentType, this.document, this.fullName, this.email, this.phone, this.password)
    this.userService.createNewUser(newUser).subscribe({
      next: (data) => console.log(data),
      error: (error) => { console.error(error) },
      complete: () => console.log("complete")
    })
  }


  showData() {
    console.log("Documento: " + this.document)
    console.log("Nombre: " + this.fullName)
    console.log("Email: " + this.email)
    console.log("Password: " + this.password)
    console.log("Telefono: " + this.phone)
  }
}
