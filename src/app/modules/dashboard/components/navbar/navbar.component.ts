import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { UserInterface } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'sofka-bank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home!: string[];
  signout!: string[];
  accounts!: string[];
  newAccount!: string[];
  deleteAccount!: string[];
  deposits!: string[];
  newDeposit!: string[];
  transfers!: string[];
  newTransfer!: string[];
  editCustomer!: string[]
  customerDetail!: string[]
  currentUser!: UserInterface;

  constructor(private readonly auth$: AuthService) {
    this.home = ['dashboard'];
    this.signout = ['../index'];
    this.accounts = ['./accounts'];
    this.newAccount = ['./accounts/add'];
    this.deleteAccount = ['./accounts/delete'];
    this.deposits = ['./deposits'];
    this.newDeposit = ['./deposits/add'];
    this.transfers = ['./transfers'];
    this.newTransfer = ['./transfers/add'];
    this.editCustomer = ['./edit'];
    this.customerDetail = ['./'];
  }

  ngOnInit(): void {
  }

  getUserInfo():void{
    this.auth$
  }

  signOut():void{
    this.auth$.signOut().subscribe
  }

}
