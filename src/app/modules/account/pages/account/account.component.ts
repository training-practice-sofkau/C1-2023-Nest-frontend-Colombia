import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAccountService } from '../../services/account-service/service-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts: any
  constructor(private readonly accountService: ServiceAccountService,
    private router: Router) {
    this.accounts = []
  }

  ngOnInit(): void {
    this.getAllAccounts()
  }

  getAllAccounts() {
    this.accountService.getAllAccount().subscribe({
      next: (data) => {
        this.accounts = data
        console.log(data)
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("complete") }
    })
  }

  goToAccount(id:string){
    this.router.navigate(["./account/"+id])
  }

}
