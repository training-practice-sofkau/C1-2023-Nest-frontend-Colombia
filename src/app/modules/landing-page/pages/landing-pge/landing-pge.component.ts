import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/authentication/services/user/user.service';

@Component({
  selector: 'app-landing-pge',
  templateUrl: './landing-pge.component.html',
  styleUrls: ['./landing-pge.component.scss']
})
export class LandingPgeComponent {

  constructor(private readonly user$: UserService) {}

  ngOnInit(): void {

  this.user$.getAll().subscribe({
    next: data => console.log('DATA ', data),
    error: err => console.log(err),
    complete: () => console.log('complete')
  });
  }

}
