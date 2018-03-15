import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillTellersComponent } from './drill-tellers.component';

describe('DrillTellersComponent', () => {
  let component: DrillTellersComponent;
  let fixture: ComponentFixture<DrillTellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillTellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillTellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
