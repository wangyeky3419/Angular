import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteChild2Component } from './execute-child2.component';

describe('ExecuteChild2Component', () => {
  let component: ExecuteChild2Component;
  let fixture: ComponentFixture<ExecuteChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
