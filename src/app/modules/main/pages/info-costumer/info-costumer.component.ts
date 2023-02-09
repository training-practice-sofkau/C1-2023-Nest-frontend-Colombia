import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-costumer',
  templateUrl: './info-costumer.component.html',
  styleUrls: ['./info-costumer.component.scss']
})
export class InfoCostumerComponent implements OnInit {

  routeUpdateCustomer:string[]
  routeCustomerInfo:string[]

  constructor() { 
    this.routeUpdateCustomer=["updateCustomer"],
    this.routeCustomerInfo=[""]
  }

  ngOnInit(): void {
  }

}
