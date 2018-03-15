import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillExecuteComponent } from './drill-execute.component';

describe('DrillExecuteComponent', () => {
  let component: DrillExecuteComponent;
  let fixture: ComponentFixture<DrillExecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillExecuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
