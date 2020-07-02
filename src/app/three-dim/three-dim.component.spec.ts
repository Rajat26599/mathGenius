import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimComponent } from './three-dim.component';

describe('ThreeDimComponent', () => {
  let component: ThreeDimComponent;
  let fixture: ComponentFixture<ThreeDimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
