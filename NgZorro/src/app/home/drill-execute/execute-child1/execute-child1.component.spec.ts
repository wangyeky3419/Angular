import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteChild1Component } from './execute-child1.component';

describe('ExecuteChild1Component', () => {
  let component: ExecuteChild1Component;
  let fixture: ComponentFixture<ExecuteChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
