/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TraerTareasComponent } from './traerTareas.component';

describe('TraerTareasComponent', () => {
  let component: TraerTareasComponent;
  let fixture: ComponentFixture<TraerTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
