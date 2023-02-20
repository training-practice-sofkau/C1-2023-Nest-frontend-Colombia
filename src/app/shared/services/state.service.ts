import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _state: boolean;
  changeState: EventEmitter<boolean>;

  constructor() {
    this._state = false;
    this.changeState = new EventEmitter<boolean>();
  }

  set State(value: boolean) {
    this._state = value;
    this.changeState.emit(value);
  }

  get State() {
    return this._state;
  }
}
