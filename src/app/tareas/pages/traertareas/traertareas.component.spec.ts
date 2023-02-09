/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TraertareasComponent } from './traertareas.component';

describe('TraertareasComponent', () => {
  let component: TraertareasComponent;
  let fixture: ComponentFixture<TraertareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraertareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraertareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
