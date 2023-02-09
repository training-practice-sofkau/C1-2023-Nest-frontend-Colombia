import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarToDoListComponent } from './agregar-to-do-list.component';

describe('AgregarToDoListComponent', () => {
  let component: AgregarToDoListComponent;
  let fixture: ComponentFixture<AgregarToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
