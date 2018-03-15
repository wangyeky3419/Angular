import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFivesComponent } from './child-fives.component';

describe('ChildFivesComponent', () => {
  let component: ChildFivesComponent;
  let fixture: ComponentFixture<ChildFivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
