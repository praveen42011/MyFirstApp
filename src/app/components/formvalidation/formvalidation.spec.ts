import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formvalidation } from './formvalidation';

describe('Formvalidation', () => {
  let component: Formvalidation;
  let fixture: ComponentFixture<Formvalidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formvalidation],
    }).compileComponents();

    fixture = TestBed.createComponent(Formvalidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
