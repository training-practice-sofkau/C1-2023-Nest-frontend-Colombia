import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetUser } from '../../../main/interfaces/user-get/user-get.interface';
import { NewUserModel } from '../../../main/models/new-user.model';
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

  constructor(private readonly userService: ServiceUserService,
    private readonly route: Router) {
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
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("complete") }
    })
  }

  goToUpdate(id: string) {
    console.log(id)
    this.route.navigate(["customer/update/" + id])
  }
}
