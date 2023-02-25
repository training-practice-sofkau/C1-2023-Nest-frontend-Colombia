import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _state: boolean;
  changeState: EventEmitter<boolean>;

  constructor() {
    const state = localStorage.getItem('state');
    if (state !== null && state === 'true') {
      this._state = true;
    } else if (state !== null && state === 'false') {
      this._state = false;
    } else {
      this._state = false;
    }
    this.changeState = new EventEmitter<boolean>();
  }

  set state(value: boolean) {
    this._state = value;
    localStorage.setItem('state', String(value));
    this.changeState.emit(value);
  }

  get state(): boolean {
    return this._state;
  }
}
