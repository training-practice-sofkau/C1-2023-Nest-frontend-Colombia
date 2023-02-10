import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAfterLoginComponent } from './header-after-login.component';

describe('HeaderAfterLoginComponent', () => {
  let component: HeaderAfterLoginComponent;
  let fixture: ComponentFixture<HeaderAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAfterLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
