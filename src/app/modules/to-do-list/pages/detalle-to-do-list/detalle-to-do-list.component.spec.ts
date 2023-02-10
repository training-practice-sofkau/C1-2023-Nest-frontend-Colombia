import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleToDoListComponent } from './detalle-to-do-list.component';

describe('DetalleToDoListComponent', () => {
  let component: DetalleToDoListComponent;
  let fixture: ComponentFixture<DetalleToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
