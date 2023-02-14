import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCostumerComponent } from './info-costumer.component';

describe('InfoCostumerComponent', () => {
  let component: InfoCostumerComponent;
  let fixture: ComponentFixture<InfoCostumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCostumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
