import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSerchComponent } from './hero-search.component';

describe('HeroSerchComponent', () => {
  let component: HeroSerchComponent;
  let fixture: ComponentFixture<HeroSerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSerchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
