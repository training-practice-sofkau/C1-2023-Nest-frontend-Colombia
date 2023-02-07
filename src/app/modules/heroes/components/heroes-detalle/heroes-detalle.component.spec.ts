import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetalleComponent } from './heroes-detalle.component';

describe('HeroesDetalleComponent', () => {
  let component: HeroesDetalleComponent;
  let fixture: ComponentFixture<HeroesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
