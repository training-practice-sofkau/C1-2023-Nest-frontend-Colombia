import { Component, EventEmitter, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'sofka-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  

  constructor(private readonly stateService: StateService) {}

  cambiarEstadoC1(estado: boolean): void {
    console.log('cambiarEstadoC1', estado);
  }

  ngOnInit(): void {
    this.stateService.changeState.subscribe({
      next: (state: boolean) => console.log('activado customer', state),
      error: (err: Error) => console.log(err),
    });
  }}
// receptor setitem
