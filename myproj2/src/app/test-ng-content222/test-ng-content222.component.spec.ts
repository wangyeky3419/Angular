import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgContent222Component } from './test-ng-content222.component';

describe('TestNgContent222Component', () => {
  let component: TestNgContent222Component;
  let fixture: ComponentFixture<TestNgContent222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgContent222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgContent222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
