import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarToDoListComponent } from './editar-to-do-list.component';

describe('EditarToDoListComponent', () => {
  let component: EditarToDoListComponent;
  let fixture: ComponentFixture<EditarToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
