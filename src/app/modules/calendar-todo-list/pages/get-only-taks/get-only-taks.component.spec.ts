import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOnlyTaksComponent } from './get-only-taks.component';

describe('GetOnlyTaksComponent', () => {
  let component: GetOnlyTaksComponent;
  let fixture: ComponentFixture<GetOnlyTaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOnlyTaksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOnlyTaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
