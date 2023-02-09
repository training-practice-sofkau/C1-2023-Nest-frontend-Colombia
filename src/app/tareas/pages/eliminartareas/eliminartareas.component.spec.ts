/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EliminartareasComponent } from './eliminartareas.component';

describe('EliminartareasComponent', () => {
  let component: EliminartareasComponent;
  let fixture: ComponentFixture<EliminartareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminartareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminartareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
