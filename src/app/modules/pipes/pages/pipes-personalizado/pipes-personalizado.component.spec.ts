import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPersonalizadoComponent } from './pipes-personalizado.component';

describe('PipesPersonalizadoComponent', () => {
  let component: PipesPersonalizadoComponent;
  let fixture: ComponentFixture<PipesPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
