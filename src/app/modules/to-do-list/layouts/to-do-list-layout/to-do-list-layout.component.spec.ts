import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListLayoutComponent } from './to-do-list-layout.component';

describe('ToDoListLayoutComponent', () => {
  let component: ToDoListLayoutComponent;
  let fixture: ComponentFixture<ToDoListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
