import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IDocumenType } from '../../models/document-type.model';
import { IUpdateUser } from '../../models/update-user.model';
import { UserModel } from '../../models/user.model';
import { ServiceUserService } from '../../services/user-service/service-user.service';

@Component({
  selector: 'app-update-costumer',
  templateUrl: './update-costumer.component.html',
  styleUrls: ['./update-costumer.component.scss']
})
export class UpdateCostumerComponent implements OnInit {
  id: string | null;
  document: string
  fullName: string;
  email: string;
  phone: string;
  password: string;
  documentTypeId: string;

  constructor(
    private readonly userService: ServiceUserService,
    private readonly route: ActivatedRoute) {
    this.id = ""
    this.document = ""
    this.fullName = ""
    this.email = ""
    this.phone = ""
    this.password = ""
    this.documentTypeId = ""
  }

  ngOnInit(): void {
    const idNew = this.route.snapshot.paramMap.get("id")
    this.id = idNew !== null ? idNew : '';
    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        console.log(data)
        this.document = data.document;
        this.fullName = data.fullName;
        this.email = data.email;
        this.phone = data.phone;
        this.password = data.password;
        this.documentTypeId = data.documentType.id
        console.log("Este es el tipo de documento: " + this.documentTypeId)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    })
  }

  updateUser() {
    const idNew = this.route.snapshot.paramMap.get("id")
    this.id = idNew !== null ? idNew : '';
    console.log(this.documentTypeId)
    const updateU = new IUpdateUser(this.documentTypeId, this.document, this.fullName, this.email, this.phone, this.password)
    this.userService.updateUser(this.id, updateU).subscribe({
      next: (data) => { console.log(data) },
      error: (err) => { console.log(err) },
      complete: () => { console.log("complete") }
    })
  }
}
