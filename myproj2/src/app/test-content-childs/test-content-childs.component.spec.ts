import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContentChildsComponent } from './test-content-childs.component';

describe('TestContentChildsComponent', () => {
  let component: TestContentChildsComponent;
  let fixture: ComponentFixture<TestContentChildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContentChildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContentChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
