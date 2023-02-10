import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-info-customer',
  templateUrl: './nav-info-customer.component.html',
  styleUrls: ['./nav-info-customer.component.scss']
})
export class NavInfoCustomerComponent implements OnInit {
  routeUpdateCustomer: string[]
  routeCustomerInfo: string[]
  
  constructor() {
    this.routeUpdateCustomer = ["updateCustomer"]
    this.routeCustomerInfo = [""]
  }

  ngOnInit(): void {
  }

}
