import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'securtiy-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent implements OnInit {
  constructor(private authService: AuthService) {}
  @Input() mensaje!: string;
  ngOnInit(): void {}
  auth(): void {
    this.authService.GoogleAuth();
  }
}
