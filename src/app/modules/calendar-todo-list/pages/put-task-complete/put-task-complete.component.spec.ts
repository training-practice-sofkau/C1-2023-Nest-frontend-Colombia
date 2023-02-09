import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTaskCompleteComponent } from './put-task-complete.component';

describe('PutTaskCompleteComponent', () => {
  let component: PutTaskCompleteComponent;
  let fixture: ComponentFixture<PutTaskCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutTaskCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutTaskCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
