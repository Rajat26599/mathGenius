import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimComponent } from './two-dim.component';

describe('TwoDimComponent', () => {
  let component: TwoDimComponent;
  let fixture: ComponentFixture<TwoDimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
