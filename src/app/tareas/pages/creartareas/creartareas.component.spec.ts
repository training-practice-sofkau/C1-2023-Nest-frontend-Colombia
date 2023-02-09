import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartareasComponent } from './creartareas.component';

describe('CreartareasComponent', () => {
  let component: CreartareasComponent;
  let fixture: ComponentFixture<CreartareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreartareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreartareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
