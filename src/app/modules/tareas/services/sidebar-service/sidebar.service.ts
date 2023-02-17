import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _estado: boolean;
  cambiarEstado: EventEmitter<boolean>;

  constructor() {
    this._estado = true;
    this.cambiarEstado = new EventEmitter<boolean>();
  }

  set estado(value: boolean){
    this.estado = value;
    this.cambiarEstado.emit(value);
  }

  get estado(): boolean{
    return this._estado
  }
}
