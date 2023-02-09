import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TransferComponent } from './transfer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TransferComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TransferComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'C1-2023-Angular-frontend-Colombia'`, () => {
    const fixture = TestBed.createComponent(TransferComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('C1-2023-Angular-frontend-Colombia');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TransferComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('C1-2023-Angular-frontend-Colombia app is running!');
  });
});
