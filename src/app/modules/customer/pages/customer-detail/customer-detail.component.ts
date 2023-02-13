import { Component, Input, OnInit } from '@angular/core';
import { CustomerInterface } from '../../../main/interfaces/customer.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { UserInterface } from '../../../auth/interfaces/user.interface';
import { DocumentTypeEnum } from '../../../../shared/enums/document-type.enum';

@Component({
  selector: 'sofka-bank-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  user!: UserInterface;

  constructor(private readonly auth$: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.user = <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? '');
  }

  getPercentage(object: Object): number {
    let len = 0;
    let value = 0;
    let json = JSON.parse(JSON.stringify(object));
    for (let x in object) {
      len++
      if (json[x] !== '') { value++ }
    }
    return value / len
  }

  getKeyByValue(value: string) {
    const indexOfS = Object.values(DocumentTypeEnum).indexOf(value as unknown as DocumentTypeEnum);
  
    const key = Object.keys(DocumentTypeEnum)[indexOfS];
  
    return key;
  }
}
