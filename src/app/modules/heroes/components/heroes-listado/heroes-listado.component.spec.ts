import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListadoComponent } from './heroes-listado.component';

describe('HeroesListadoComponent', () => {
  let component: HeroesListadoComponent;
  let fixture: ComponentFixture<HeroesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
