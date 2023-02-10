import { Component, OnInit } from '@angular/core';
import { IGetUser } from '../../interfaces/user-get/user-get.interface';
import { NewUserModel } from '../../models/new-user.model';
import { ServiceUserService } from '../../services/user-service/service-user.service';

@Component({
  selector: 'app-info-costumer',
  templateUrl: './info-costumer.component.html',
  styleUrls: ['./info-costumer.component.scss']
})
export class InfoCostumerComponent implements OnInit {

  document: string
  fullName: string;
  email: string;
  phone: string;
  users: any

  constructor(private readonly userService: ServiceUserService) {
    this.document = ""
    this.fullName = ""
    this.email = ""
    this.phone = ""
    this.users = []
  }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe({
      next: (data) => {
        this.users = data
        console.log(this.users)
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("complete") }
    })
  }

}
