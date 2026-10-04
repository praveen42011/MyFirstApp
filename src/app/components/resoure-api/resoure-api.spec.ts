import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResoureAPI } from './resoure-api';

describe('ResoureAPI', () => {
  let component: ResoureAPI;
  let fixture: ComponentFixture<ResoureAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResoureAPI],
    }).compileComponents();

    fixture = TestBed.createComponent(ResoureAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
