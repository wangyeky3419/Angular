import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillTellersNoComponent } from './drill-tellers-no.component';

describe('DrillTellersNoComponent', () => {
  let component: DrillTellersNoComponent;
  let fixture: ComponentFixture<DrillTellersNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillTellersNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillTellersNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
