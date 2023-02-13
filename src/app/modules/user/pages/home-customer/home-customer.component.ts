import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { ServiceUserService } from '../../services/user-service/service-user.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.scss'],
})
export class HomeCustomerComponent implements OnInit {
  id: string | null;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  getUser?: Observable<UserModel>;

  constructor(
    private readonly router: Router,
    private readonly customerService: ServiceUserService
  ) {
    this.id = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
  }

  ngOnInit(): void {
    const idLocal = localStorage.getItem('id');
    console.log(localStorage.getItem("token"))
    this.id = idLocal !== null ? idLocal : '';
    this.customerService.getUserById(this.id).subscribe({
      next: (data) => {
        this.document = data.document
        this.fullName = data.fullName
        this.email = data.email
        this.phone = data.phone
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => { "complete" }
    });
  }

  goToAccount(id: string) {
    this.router.navigate(['./account/' + id]);
  }
  goToDeposits(id: string) {
    this.router.navigate(['./account/' + id]);
  }
  goTotransfer(id: string) {
    this.router.navigate(['./account/' + id]);
  }
}
