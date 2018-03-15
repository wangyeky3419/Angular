import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFoursComponent } from './child-fours.component';

describe('ChildFoursComponent', () => {
  let component: ChildFoursComponent;
  let fixture: ComponentFixture<ChildFoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
