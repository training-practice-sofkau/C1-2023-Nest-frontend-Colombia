import { Component, Input } from '@angular/core';

@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() auth: boolean;

  constructor() {
    this.auth = true;
  }
}
