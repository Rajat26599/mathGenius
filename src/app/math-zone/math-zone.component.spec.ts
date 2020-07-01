import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathZoneComponent } from './math-zone.component';

describe('MathZoneComponent', () => {
  let component: MathZoneComponent;
  let fixture: ComponentFixture<MathZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
