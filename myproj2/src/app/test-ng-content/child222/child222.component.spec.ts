import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child222Component } from './child222.component';

describe('Child222Component', () => {
  let component: Child222Component;
  let fixture: ComponentFixture<Child222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
