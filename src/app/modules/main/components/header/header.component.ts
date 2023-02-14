import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login: boolean
  routeLogin: string[]
  routeHome: string[]
  routeRegister:string[]
  constructor() {
    this.login = true
    this.routeLogin = ["login"]
    this.routeHome = [""]
    this.routeRegister=["register"]
  }

  ngOnInit(): void {
  }

}
