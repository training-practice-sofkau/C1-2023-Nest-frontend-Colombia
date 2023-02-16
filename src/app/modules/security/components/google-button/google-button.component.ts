import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'securtiy-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private readonly router: Router
  ) {}
  @Input() mensaje!: string;
  ngOnInit(): void {}
}
