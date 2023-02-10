import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-costumer',
  templateUrl: './info-costumer.component.html',
  styleUrls: ['./info-costumer.component.scss']
})
export class InfoCostumerComponent implements OnInit {

  json = {
    "documentTypeId": "07cd5b09-4aca-4946-a720-d748f4016552",
    "document": "1231231232",
    "fullName": "Daniel Basto",
    "email": "daniel1@gmail.com",
    "phone": "123123123123",
    "password": "Jersondani13577"
  }
  document: string
  fullName: string;
  email: string;
  phone: string

  constructor() {
    this.document = ""
    this.fullName = ""
    this.email = ""
    this.phone = ""
  }

  ngOnInit(): void {
    this.document = this.json.document;
    this.fullName = this.json.fullName;
    this.email = this.json.email;
    this.phone = this.json.phone
  }

}
