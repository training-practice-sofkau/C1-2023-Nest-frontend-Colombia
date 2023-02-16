import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {

  private _color = true;
  updateColor: EventEmitter<boolean>;

  constructor() {
    this.updateColor = new EventEmitter<boolean>();
  }

  set color(value: boolean) {
    this._color = value;
    this.updateColor.emit(value);
  }

  get color(): boolean {
    return this._color;
  }
}
