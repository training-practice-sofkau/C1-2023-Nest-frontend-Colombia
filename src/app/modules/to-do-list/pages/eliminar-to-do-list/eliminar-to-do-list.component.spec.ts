import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarToDoListComponent } from './eliminar-to-do-list.component';

describe('EliminarToDoListComponent', () => {
  let component: EliminarToDoListComponent;
  let fixture: ComponentFixture<EliminarToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
