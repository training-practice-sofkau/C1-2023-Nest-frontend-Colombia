import { Component, Input } from '@angular/core';

@Component({
  selector: 'sofka-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  cuenta: string | null = localStorage.getItem('correo')
}
