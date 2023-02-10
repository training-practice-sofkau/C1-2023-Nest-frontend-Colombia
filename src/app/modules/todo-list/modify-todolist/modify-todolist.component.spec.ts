import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTodolistComponent } from './modify-todolist.component';

describe('ModifyTodolistComponent', () => {
  let component: ModifyTodolistComponent;
  let fixture: ComponentFixture<ModifyTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
