import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoToDoListComponent } from './listado-to-do-list.component';

describe('ListadoToDoListComponent', () => {
  let component: ListadoToDoListComponent;
  let fixture: ComponentFixture<ListadoToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
