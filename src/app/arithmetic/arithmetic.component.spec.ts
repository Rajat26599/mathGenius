import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticComponent } from './arithmetic.component';

describe('ArithmeticComponent', () => {
  let component: ArithmeticComponent;
  let fixture: ComponentFixture<ArithmeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
