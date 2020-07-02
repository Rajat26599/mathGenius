import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraComponent } from './algebra.component';

describe('AlgebraComponent', () => {
  let component: AlgebraComponent;
  let fixture: ComponentFixture<AlgebraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgebraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
