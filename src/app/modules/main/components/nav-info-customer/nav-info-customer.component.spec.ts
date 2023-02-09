import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInfoCustomerComponent } from './nav-info-customer.component';

describe('NavInfoCustomerComponent', () => {
  let component: NavInfoCustomerComponent;
  let fixture: ComponentFixture<NavInfoCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavInfoCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavInfoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
